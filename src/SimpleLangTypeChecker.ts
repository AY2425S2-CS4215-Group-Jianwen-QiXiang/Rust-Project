import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { SimpleLangReturnTypeFinder} from  './SimpleLangReturnTypeFinder'

import {
    FunctionAppContext,
    FunctionDeclContext,
    ReturnStmtContext,
    LambdaExprContext,
    BooleanContext,
    IntegerContext,
    LambdaContext,
    NegateContext,
    LogicalContext,
    LiteralsContext,
    ParensContext,
    AddSubContext,
    MulDivContext,
    VariableContext,
    NotContext,
    BlockContext,
    BlockStmtContext,
    WhileStmtContext,
    ConstDeclContext,
    ExprStmtContext,
    IfStmtContext,
    StatementContext,
    SequenceContext,
    ProgContext,
    SimpleLangParser, IntTypeContext, BoolTypeContext, FunctionTypeContext,
} from './parser/src/SimpleLangParser';
import { SimpleLangVisitor } from './parser/src/SimpleLangVisitor';
import {type} from "node:os";

type TypeObject = {
    type: string;
    parameterType?: TypeObject[];
    returnType?: TypeObject;
};

type TypeClosure = {
    name: string;
    type: string;
    dropped : boolean;
    mutable : boolean;
    parameterType?: TypeObject[];
    returnType?: TypeObject;
};


type CompileTimeTypeEnvironmentToType = (arg: TypeClosure[][]) => TypeObject;

export class SimpleLangTypeChecker extends AbstractParseTreeVisitor<CompileTimeTypeEnvironmentToType> implements SimpleLangVisitor<CompileTimeTypeEnvironmentToType> {
    // Visit a parse tree produced by SimpleLangParser#prog

    returnTypeFinder = new SimpleLangReturnTypeFinder();

    my_push (array, ...items) {
        for (let item of items) {
            array.push(item)
        }
        return array
    }

    compile_time_environment_extend (vs: TypeClosure[], e: TypeClosure[][]): TypeClosure[][] {
        //  make shallow copy of e
        return this.my_push([...e], vs)
    }

    compile_time_environment_type_look_up (env: TypeClosure[][], x:string) : TypeClosure {
        for (let i = env.length - 1; i >= 0; i--) {
            for (let j = 0; j < Object.keys(env[i]).length; j++) {
                if (env[i][j].name == x) {
                    return env[i][j]
                }
            }
        }
        throw new Error(`Unbounded name: ${x}`)
    }

    scan_statement(ctx : StatementContext, ce : TypeClosure[][]) : TypeClosure[] {
        if (ctx instanceof ConstDeclContext) {
            return [{name : ctx.NAME().getText(), type: ctx.type().getText(), dropped: false, mutable: false}];
        } else if (ctx instanceof FunctionDeclContext) {
            let parameterTypes: TypeObject[] = []
            let returnType: TypeObject
            let types = ctx.type_()
            for (let i = 0; i < types.length - 1; i++) {
                parameterTypes[i] = this.visit(types[i])(ce)
            }
            returnType = this.visit(types[types.length - 1])(ce)
            return [{name : ctx.NAME()[0].getText(), type: "function", dropped:false,
                mutable: false, parameterType: parameterTypes, returnType: returnType}]
        } else {
            return []
        }
    }


    scan_sequence(ctx : SequenceContext, ce) : TypeClosure[] {
        return ctx.statement().reduce((acc, x) => acc.concat(this.scan_statement(x, ce)),
            [])
    }

    visitProg(ctx: ProgContext): CompileTimeTypeEnvironmentToType {
        return cte => {
            let vs = this.scan_sequence(ctx.sequence(), cte)
            let e = this.compile_time_environment_extend(vs, cte)
            return this.visit(ctx.sequence())(e);
        }

    }

    visitSequence(ctx: SequenceContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let statements = ctx.statement()
            if (statements.length == 0) {
                return {type : "undefined"}
            } else {
                let result: TypeObject = {type : "undefined"}
                for (let statement of statements) {
                    result = this.visit(statement)(ce)
                }
                return result
            }

        }
    }

    visitExprStmt(ctx: ExprStmtContext) : CompileTimeTypeEnvironmentToType {
        return this.visit(ctx.expression())
    }

    visitReturnStmt(ctx: ReturnStmtContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            throw new Error("Return statements outside function")
        }
    }

    visitConstDecl(ctx: ConstDeclContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let declared_type = ctx.type().getText()
            let name = ctx.NAME().getText()
            let actual_type = this.visit(ctx.expression())(ce)
            if (declared_type == actual_type.type) {
                return actual_type
            } else {
                throw new Error(`Expected type ${declared_type}, actual type ${actual_type.type}`)
            }
        }
    }

    visitIfStmt(ctx: IfStmtContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let predicate_type = this.visit(ctx.expression())(ce)
            if (predicate_type.type !== "bool") {
                throw new Error(`Expect boolean type at predicate, but got ${predicate_type.type}`)
            }
            let cons_type = this.visit(ctx.block(0))(ce)
            let alt_type = this.visit(ctx.block(1))(ce)
            if (cons_type.type !== alt_type.type) {
                throw new Error(`Different types in if statement. Type for consequence: ${cons_type.type} Type for alternative: ${alt_type.type}`)
            }
            return cons_type
        }

    }

    visitWhileStmt(ctx: WhileStmtContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let predicate_type = this.visit(ctx.expression())(ce)
            if (predicate_type.type !== "bool") {
                throw new Error(`Expect boolean type at predicate, but got ${predicate_type.type}`)
            }
            this.visit(ctx.block())(ce)
            return {type : "undefined"}
        }

    }

    visitBlockStmt(ctx: BlockStmtContext) : CompileTimeTypeEnvironmentToType {
        return this.visit(ctx.block())
    }

    visitFunctionDecl(ctx: FunctionDeclContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let declaredParameterTypes: TypeObject[] = []
            let declaredReturnType: TypeObject
            let types = ctx.type_()
            for (let i = 0; i < types.length - 1; i++) {
                declaredParameterTypes[i] = this.visit(types[i])(ce)
            }
            declaredReturnType = this.visit(types[types.length - 1])(ce)
            let actualReturnType = this.returnTypeFinder.visit(ctx.block())(ce)

            if (this.deepEqual(actualReturnType, declaredReturnType)) {
                return { type : "function", parameterTypes : declaredParameterTypes, returnTypes : declaredReturnType }
            } else {
                throw new Error(`Mismatch in return type, expected : ${JSON.stringify(declaredReturnType)},
                 but got ${JSON.stringify(actualReturnType)}`)
            }
        }
    }

    visitFunctionApp(ctx: FunctionAppContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let functionName= ctx.NAME().getText()
            let functionType = this.compile_time_environment_type_look_up(ce, functionName)
            if (functionType.type !== "function") {
                throw new Error(`Call to non-function object : ${functionName}`)
            } else {
                let expectedParameterTypes = functionType.parameterType
                let actualParameters = ctx.expression()
                if (actualParameters.length !== expectedParameterTypes.length) {
                    throw new Error(`Incorrect number of argument. Expect ${expectedParameterTypes.length},
                     but got ${actualParameters.length}`)
                } else {
                    for (let i = 0; i < expectedParameterTypes.length; i++) {
                        let expectedParameterType: TypeObject = expectedParameterTypes[i]
                        let actualParameterType = this.visit(actualParameters[i])(ce)
                        if (actualParameters[i] instanceof VariableContext) {}
                        if (this.deepEqual(expectedParameterType, actualParameterType)) {

                        } else {
                            throw new Error(`Type mismatch in argument ${i} of call to ${functionName}
                             Expected ${JSON.stringify(actualParameterType)} type ${JSON.stringify(expectedParameterType)}`)
                        }
                    }
                    return functionType.returnType
                }
            }
        }
    }

    visitBlock(ctx: BlockContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let vs = this.scan_sequence(ctx.sequence(), ce)
            let e = this.compile_time_environment_extend(vs, ce)
            return this.visit(ctx.sequence())(e);
        }
    }

    visitNot(ctx: NotContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let op1_type = this.visit(ctx.expression())(ce)
            if (op1_type.type !== "bool") {
                throw new Error(`Expected boolean for !, but got ${op1_type.type}`)
            }
            return {type : "bool"}
        }

    }

    visitVariable(ctx: VariableContext) : CompileTimeTypeEnvironmentToType {
        return  ce => {
            let name = ctx.NAME().getText()
            let lookupResult = this.compile_time_environment_type_look_up(ce, name)
            if (lookupResult.dropped) {
                throw new Error(`reference to name ${name} has been dropped`)
            }
            let result: TypeObject = {type : lookupResult.type}
            if ("parameterType" in lookupResult && "returnType" in lookupResult) {
                result.parameterType = lookupResult.parameterType
                result.returnType = lookupResult.returnType
            }
            return result

        }
    }

    visitMulDiv(ctx: MulDivContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let op1_type = this.visit(ctx.expression(0))(ce)
            let op2_type = this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (op1_type.type !== "int" || op2_type.type !== "int") {
                throw new Error(`Expect two numbers for ${op}, but got ${op1_type.type} and ${op2_type.type}`)
            }
            return {type : "int"}
        }

    }

    visitAddSub(ctx: AddSubContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            let op1_type = this.visit(ctx.expression(0))(ce)
            let op2_type = this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (op1_type.type !== "int" || op2_type.type !== "int") {
                throw new Error(`Expect two numbers for ${op}, but got ${op1_type.type} and ${op2_type.type}`)
            }
            return {type : "int"}
        }

    }

    visitParens(ctx: ParensContext) : CompileTimeTypeEnvironmentToType {
        return this.visit(ctx.expression())
    }

    visitLiterals(ctx: LiteralsContext) : CompileTimeTypeEnvironmentToType {
        return this.visit(ctx.literal())
    }

    visitLogical(ctx: LogicalContext) : CompileTimeTypeEnvironmentToType {
        return  ce => {
            let op1_type = this.visit(ctx.expression(0))(ce)
            let op2_type = this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (op1_type.type !== "bool" || op2_type.type !== "bool") {
                throw new Error(`Expect two booleans for ${op}, but got ${op1_type.type} and ${op2_type.type}`)
            }
            return {type: "bool"}
        }

    }

    visitNegate(ctx: NegateContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let op1_type = this.visit(ctx.expression())(ce)
            if (op1_type.type !== "int") {
                throw new Error(`Expected integer for -unary, but got ${op1_type.type}`)
            }
            return {type : "int"}
        }

    }

    visitLambda(ctx: LambdaContext) : CompileTimeTypeEnvironmentToType {
        return this.visit(ctx.lambdaExpr())
    }

    visitInteger(ctx: IntegerContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "int"}
        }

    }
    visitBoolean(ctx: BooleanContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "bool"}
        }
    }

    visitLambdaExpr(ctx: LambdaExprContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "int"}
        }

    }

    visitIntType(ctx: IntTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "int"}
        }
    }

    visitBoolType(ctx: BoolTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "bool"}
        }
    }

    visitFunctionType(ctx: FunctionTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let parameterTypes : TypeObject[] = []
            let returnType : TypeObject
            let types = ctx.type_()
            for (let i = 0; i < types.length - 1; i++) {
                let current_para = this.visit(types[i])(ce)
                if (current_para.type !== "function") {
                    parameterTypes[i] = {type : current_para.type}
                } else {
                    parameterTypes[i] = {type : "function",
                        parameterType: current_para.parameterType, returnType: current_para.returnType}
                }
            }
            returnType =  this.visit(types[types.length - 1])(ce)
            return {type: "function", parameterTypes, returnType}
        }
    }

    deepEqual(obj1: any, obj2: any): boolean {
        if (obj1 === obj2) return true; // Same reference

        if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 == null || obj2 == null) {
            return false; // One of them is not an object
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false; // Different number of keys

        return keys1.every(key => this.deepEqual(obj1[key], obj2[key])); // Recursively check values
    }

}
