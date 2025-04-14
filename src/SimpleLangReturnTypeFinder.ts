import {AbstractParseTreeVisitor, ParseTree} from "antlr4ng";
import {SimpleLangVisitor} from "./parser/src/SimpleLangVisitor";
import {
    StringContext,
    StringTypeContext,
    StringPointerTypeContext,
    StringMutPointerTypeContext,
    PtrAssignmentContext,
    FunctionTypeContext,
    BoolTypeContext,
    IntTypeContext,
    AddSubContext,
    BlockContext,
    BlockStmtContext,
    BooleanContext,
    ConstDeclContext,
    ExprStmtContext,
    FunctionAppContext,
    FunctionDeclContext,
    IfStmtContext,
    IntegerContext,
    LambdaContext,
    LambdaExprContext,
    LiteralsContext,
    LogicalContext,
    MulDivContext,
    NegateContext,
    NotContext,
    ParensContext,
    ProgContext,
    ReturnStmtContext,
    SequenceContext,
    StatementContext,
    VariableContext,
    WhileStmtContext,
    BorrowContext,
    MutBorrowContext,
    ExpressionContext,
    AssignmentContext,
    DereferenceContext,
    MutConstDeclContext,
    UndefinedTypeContext,
    UndefinedContext,
    ComparisonContext,
    EqualityContext,
    BoolPointerTypeContext, BoolMutPointerTypeContext, IntPointerTypeContext, IntMutPointerTypeContext
} from "./parser/src/SimpleLangParser";
import {Evaluator} from "./SimpleLangEvaluator";
import util from "util";

type TypeObject = {
    type: string;
    parameterType?: TypeObject[];
    returnType?: TypeObject;
};

type TypeClosure = {
    name: string;
    type: string;
    dropped : boolean;
    moved : boolean;
    mutable : boolean;
    borrowState: {
        mutableBorrows: number;
        immutableBorrows: number;
    };
    borrowFrom?: TypeClosure;
    parameterType?: TypeObject[];
    returnType?: TypeObject;
    paramNames?: string[];
    block?: BlockContext; // Store the function body for re-checking
};




type CompileTimeTypeEnvironmentToType = (arg: TypeClosure[][]) => TypeObject;

export class SimpleLangReturnTypeFinder extends AbstractParseTreeVisitor<CompileTimeTypeEnvironmentToType> implements SimpleLangVisitor<CompileTimeTypeEnvironmentToType> {
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
            return [{name : ctx.NAME().getText(), type: ctx.type().getText(),
                dropped: false, mutable: false, borrowState:{mutableBorrows:0, immutableBorrows:0}, moved:false}];
        } else if (ctx instanceof MutConstDeclContext) {
            return [{name : ctx.NAME().getText(), type: ctx.type().getText(),
                dropped: false, mutable: true, borrowState:{mutableBorrows:0, immutableBorrows:0}, moved:false}];
        } else if (ctx instanceof FunctionDeclContext) {
            let parameterTypes: TypeObject[] = []
            let returnType: TypeObject
            let types = ctx.type_()
            for (let i = 0; i < types.length - 1; i++) {
                parameterTypes[i] = this.visit(types[i])(ce)
            }
            returnType = this.visit(types[types.length - 1])(ce)
            return [{name : ctx.NAME()[0].getText(), type: "function", dropped:false,
                mutable: false, parameterType: parameterTypes, returnType: returnType,
                borrowState:{mutableBorrows:0, immutableBorrows:0}, moved:false}];
        } else {
            return []
        }
    }



    scan_sequence(ctx : SequenceContext, ce : TypeClosure[][]) : TypeClosure[] {
        const names = {}
        const result: TypeClosure[] = ctx.statement().reduce((acc, x) => acc.concat(this.scan_statement(x, ce)),
            ([] as TypeClosure[]))
        for (let i = 0; i < result.length; i++) {
            const closure = result[i]
            if (names[closure.name] === undefined) {
                names[closure.name] = true
            } else {
                throw new Error(`Repeated declaration of name ${closure.name}`)
            }
        }
        return result
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
                    if (result.type === "return") {
                        return result
                    }
                }
                return {type : "undefined"}
            }

        }
    }

    visitExprStmt(ctx: ExprStmtContext) : CompileTimeTypeEnvironmentToType {
        return this.visit(ctx.expression())
    }

    visitReturnStmt(ctx: ReturnStmtContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let returnType = this.visit(ctx.expression())(ce)
            return {type:"return", returnType: returnType}
        }
    }

    visitConstDecl(ctx: ConstDeclContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let declared_type = ctx.type().getText()
            let name = ctx.NAME().getText()
            let actual_type = this.visit(ctx.expression())(ce)

            if (declared_type == actual_type.type) {
                if (ctx.expression() instanceof VariableContext) {
                    const rightName = (ctx.expression() as VariableContext).NAME().getText();
                    const rightVar = this.compile_time_environment_type_look_up(ce, rightName);
                    // Only move if it's not a reference
                    if (rightVar.type !== 'int' && rightVar.type !== 'bool' && rightVar.type !== '*int' && rightVar.type !== '*bool') {
                        if (rightVar.borrowState.mutableBorrows > 0 || rightVar.borrowState.immutableBorrows > 0) {
                            throw new Error(`Cannot move ${rightVar.name} as it is being borrowed`);
                        }
                        rightVar.moved = true;
                    } if (rightVar.type.startsWith("*")) {
                        this.compile_time_environment_type_look_up(ce, name).borrowFrom = rightVar.borrowFrom;
                        if (!rightVar.type.includes("mut")) {
                            rightVar.borrowFrom.borrowState.immutableBorrows += 1;
                        }
                    }
                } else if (ctx.expression() instanceof BorrowContext || ctx.expression() instanceof MutBorrowContext) {
                    this.compile_time_environment_type_look_up(ce, name).borrowFrom =
                        this.compile_time_environment_type_look_up(ce, (ctx.expression() as BorrowContext).NAME().getText())
                }
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
            } else if (cons_type.type === "return") {
                if (cons_type.returnType == cons_type.returnType) {
                    return cons_type
                } else {
                    throw new Error(`Different types in if statement. Type for consequence: ${cons_type.returnType} Type for alternative: ${alt_type.returnType}`)
                }
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
/*
    visitFunctionDecl(ctx: FunctionDeclContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let declaredParameterTypes: TypeObject[] = []
            let declaredReturnType: TypeObject
            let types = ctx.type_()
            for (let i = 0; i < types.length - 1; i++) {
                declaredParameterTypes[i] = this.visit(types[i])(ce)
            }
            declaredReturnType = this.visit(types[types.length - 1])(ce)
            let allNames = ctx.NAME()
            let parameterName: TypeClosure[] = []
            for (let i = 1; i < allNames.length; i++) {
                parameterName[i - 1] = {name:allNames[i].getText(), type: declaredParameterTypes[i - 1].type, dropped: false,
                    mutable:false, parameterType:declaredParameterTypes[i - 1].parameterType,
                    returnType: declaredParameterTypes[i - 1].returnType, borrowState:{mutableBorrows:0, immutableBorrows:0}, moved:false}
            }
            let e = this.compile_time_environment_extend(parameterName, ce)
            let ReturnObject = this.visit(ctx.block())(e)
            let actualReturnType: TypeObject = {type: ""}
            if (ReturnObject.type == "return") {
                actualReturnType.type = ReturnObject.returnType.type
            } else {
                actualReturnType.type = "undefined"
            }

            if (this.deepEqual(actualReturnType, declaredReturnType)) {
                return { type : "function", parameterTypes : declaredParameterTypes, returnTypes : declaredReturnType }
            } else {
                throw new Error(`Mismatch in return type, expected : ${JSON.stringify(declaredReturnType.type)},but got ${JSON.stringify(actualReturnType.type)}`)
            }
        }
    }*/

    visitFunctionDecl(ctx: FunctionDeclContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            let declaredParameterTypes: TypeObject[] = [];
            let declaredReturnType: TypeObject;
            let types = ctx.type_();

            // Parse parameter types
            for (let i = 0; i < types.length - 1; i++) {
                declaredParameterTypes[i] = this.visit(types[i])(ce);
            }

            // Parse return type
            declaredReturnType = this.visit(types[types.length - 1])(ce);

            // Store function information in the type closure
            const functionName = ctx.NAME()[0].getText();
            const functionClosure = this.compile_time_environment_type_look_up(ce, functionName);

            // Store the function body
            functionClosure.block = ctx.block();

            // Store parameter names
            functionClosure.paramNames = [];
            for (let i = 1; i < ctx.NAME().length; i++) {
                functionClosure.paramNames.push(ctx.NAME()[i].getText());
            }

            // Return function type
            return {
                type: "function",
                parameterType: declaredParameterTypes,
                returnType: declaredReturnType
            };
        }
    }

    visitFunctionApp(ctx: FunctionAppContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            let functionName = ctx.NAME().getText();
            let functionType = this.compile_time_environment_type_look_up(ce, functionName);

            if (functionType.dropped) {
                throw new Error(`Cannot call function ${functionName} as it has been dropped`);
            }
            if (functionType.moved) {
                throw new Error(`Cannot call function ${functionName} as it has been moved`);
            }

            if (functionType.type !== "function") {
                throw new Error(`Call to non-function object: ${functionName} type: ${JSON.stringify(functionType.type)}`);
            } else {
                let expectedParameterTypes = functionType.parameterType;
                let actualParameters = ctx.expression();

                if (actualParameters.length !== expectedParameterTypes.length) {
                    throw new Error(`Incorrect number of arguments. Expected ${expectedParameterTypes.length}, but got ${actualParameters.length}`);
                } else {
                    // Create a new environment for parameter validation
                    let parameterEnvironment: TypeClosure[] = [];
                    let parameterBorrowMap = new Map(); // Track which variables are borrowed by which parameters

                    // Check each parameter and handle special cases
                    for (let i = 0; i < expectedParameterTypes.length; i++) {
                        let expectedParameterType: TypeObject = expectedParameterTypes[i];
                        let actualParameter = actualParameters[i];
                        let actualParameterType = this.visit(actualParameter)(ce);

                        if (!this.deepEqual(expectedParameterType, actualParameterType)) {
                            throw new Error(`Type mismatch in argument ${i} of call to ${functionName}. Expected ${JSON.stringify(expectedParameterType.type)}, got ${JSON.stringify(actualParameterType.type)}`);
                        }

                        // Create parameter closure with proper parameter name from function declaration
                        const paramName = functionType.paramNames && functionType.paramNames[i]
                            ? functionType.paramNames[i]
                            : `param${i}`;

                        // Handle different parameter cases
                        if (actualParameter instanceof VariableContext) {
                            const argName = (actualParameter as VariableContext).NAME().getText();
                            const argVar = this.compile_time_environment_type_look_up(ce, argName);

                            // Add to parameter environment with appropriate state
                            parameterEnvironment.push({
                                name: paramName,
                                type: argVar.type,
                                dropped: false,
                                moved: false,
                                mutable: argVar.mutable,
                                borrowState: {mutableBorrows: 0, immutableBorrows: 0},
                                // For non-primitive types, track that the value is moved to the parameter
                                borrowFrom: argVar.type !== 'int' && argVar.type !== 'bool' ? argVar : undefined
                            });

                            // If non-primitive value, mark as moved
                            if (argVar.type !== 'int' && argVar.type !== 'bool' && !argVar.type.startsWith('*')) {
                                argVar.moved = true;
                            }
                        } else if (actualParameter instanceof BorrowContext) {
                            const argName = (actualParameter as BorrowContext).NAME().getText();
                            const argVar = this.compile_time_environment_type_look_up(ce, argName);

                            // Add to parameter environment as an immutable reference
                            parameterEnvironment.push({
                                name: paramName,
                                type: `*${argVar.type}`,
                                dropped: false,
                                moved: false,
                                mutable: false,
                                borrowState: {mutableBorrows: 0, immutableBorrows: 0},
                                borrowFrom: argVar
                            });

                            // Update the borrow state of the original variable
                            argVar.borrowState.immutableBorrows++;
                            parameterBorrowMap.set(i, {variable: argVar, mutable: false});
                        }
                        else if (actualParameter instanceof MutBorrowContext) {
                            const argName = (actualParameter as MutBorrowContext).NAME().getText();
                            const argVar = this.compile_time_environment_type_look_up(ce, argName);
                            console.log(util.inspect(argVar, true, null, true));

                            // Add to parameter environment as a mutable reference
                            parameterEnvironment.push({
                                name: paramName,
                                type: `*mut ${argVar.type}`,
                                dropped: false,
                                moved: false,
                                mutable: true,
                                borrowState: {mutableBorrows: 0, immutableBorrows: 0},
                                borrowFrom: argVar
                            });

                            // Update the borrow state of the original variable
                            argVar.borrowState.mutableBorrows++;
                            parameterBorrowMap.set(i, {variable: argVar, mutable: true});
                        }
                        else {
                            // For literal and other non-variable expressions
                            parameterEnvironment.push({
                                name: paramName,
                                type: actualParameterType.type,
                                dropped: false,
                                moved: false,
                                mutable: false,
                                borrowState: {mutableBorrows: 0, immutableBorrows: 0}
                            });
                        }
                    }

                    // Does not revisit for recursive calls anymore

                    // Release any borrows when function returns
                    parameterBorrowMap.forEach((borrowed, paramIndex) => {
                        if (borrowed.mutable) {
                            borrowed.variable.borrowState.mutableBorrows--;
                        } else {
                            borrowed.variable.borrowState.immutableBorrows--;
                        }
                    });

                    console.log("Finish Type Checking for function application\n")
                    return functionType.returnType;
                }
            }
        }
    }



    visitBorrow(ctx: BorrowContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            const name = ctx.NAME().getText();
            const variable = this.compile_time_environment_type_look_up(ce, name);

            if (variable.dropped) {
                throw new Error(`Cannot borrow ${name} as it is dropped`)
            }
            if (variable.moved) {
                throw new Error(`Cannot borrow ${name} as it is moved`)
            }

            // Cannot create immutable borrow if mutable borrows exist
            if (variable.borrowState.mutableBorrows > 0) {
                throw new Error(`Cannot borrow '${name}' as immutable because it is also borrowed as mutable`);
            }

            // Track the immutable borrow
            variable.borrowState.immutableBorrows++;

            const innerType = variable.type
            if (innerType !== "int" && innerType !== "bool" && innerType !== "string") {
                throw new Error(`Can only create pointer for int, bool, and string, but got ${JSON.stringify(innerType)}`)
            }
            return {type: '*'+innerType};
        };
    }

    visitMutBorrow(ctx: MutBorrowContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            const name = ctx.NAME().getText();
            const variable = this.compile_time_environment_type_look_up(ce, name);

            if (variable.dropped) {
                throw new Error(`Cannot borrow ${name} as it is dropped`)
            }
            if (variable.moved) {
                throw new Error(`Cannot borrow ${name} as it is moved`)
            }

            if (!variable.mutable) {
                throw new Error(`Cannot mutably borrow immutable variable '${name}'`);
            }

            // Cannot create mutable borrow if any borrows exist
            if (variable.borrowState.mutableBorrows > 0) {
                throw new Error(`Cannot borrow '${name}' as mutable more than once at a time`);
            }

            if (variable.borrowState.immutableBorrows > 0) {
                throw new Error(`Cannot borrow '${name}' as mutable because it is also borrowed as immutable`);
            }

            variable.borrowState.mutableBorrows++;

            const innerType = variable.type
            if (innerType !== "int" && innerType !== "bool" && innerType !== "string") {
                throw new Error(`Can only create pointer for int, bool, and string, but got ${JSON.stringify(innerType)}`)
            }
            // Check if the inner expression can be mutably borrowed
            if (innerType.startsWith('*')) {
                throw new Error('Cannot borrow a reference as mutable');
            }
            return {type: '*mut '+innerType};
        };
    }

    // Helper to check if expression is on the left side of an assignment
    isAssignmentTarget(ctx: ExpressionContext): boolean {
        const parent = ctx.parent;
        // Check if this expression is the left-hand side of an assignment
        return parent instanceof AssignmentContext && parent.expression() === ctx;
    }

    visitDereference(ctx: DereferenceContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            const name = ctx.NAME().getText();
            const variable = this.compile_time_environment_type_look_up(ce, name);
            const innerType = variable.type

            // Check if the expression is a reference type
            if (!innerType.startsWith('*')) {
                throw new Error(`Cannot dereference non-reference type '${innerType}'`);
            }

            if (variable.borrowFrom) {
                if (variable.borrowFrom.dropped) {
                    throw new Error(`The pointer ${name} is invalid as it is pointing to a dropped variable`)
                }
            }

            if (variable.moved) {
                throw new Error(`The pointer ${name} is moved`)
            }

            // Extract the base type (remove the reference)
            const baseType = innerType.replace(/^\*(mut )?/, '');

            // Check if this is an assignment target
            const isAssignmentTarget = this.isAssignmentTarget(ctx);

            // If it's an assignment target, ensure the reference is mutable
            if (isAssignmentTarget && !innerType.includes('mut')) {
                throw new Error(`Cannot modify through an immutable reference`);
            }

            return {type: baseType};
        };
    }

    visitAssignment(ctx: AssignmentContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            const name = ctx.NAME().getText();
            const variable = this.compile_time_environment_type_look_up(ce, name);

            if (!variable.mutable) {
                throw new Error(`Cannot assign to immutable variable '${name}'`);
            }

            const rightType = this.visit(ctx.expression())(ce);
            if (variable.type !== rightType.type) {
                throw new Error(`Type mismatch: expected '${variable.type}', found '${rightType.type}'`);
            }

            // If the right side is a variable, mark it as moved
            if (ctx.expression() instanceof VariableContext) {
                const rightName = (ctx.expression() as VariableContext).NAME().getText();
                const rightVar = this.compile_time_environment_type_look_up(ce, rightName);
                // Only move if it's not a reference
                if (rightVar.type !== 'int' && rightVar.type !== 'bool' && rightVar.type !== '*int' && rightVar.type !== '*bool') {
                    if (rightVar.borrowState.mutableBorrows > 0 || rightVar.borrowState.immutableBorrows > 0) {
                        throw new Error(`Cannot move ${rightVar.name} as it is being borrowed`);
                    }
                    rightVar.moved = true;
                } if (rightVar.type.startsWith("*")) {
                    this.compile_time_environment_type_look_up(ce, name).borrowFrom = rightVar.borrowFrom;
                    if (!rightVar.type.includes("mut")) {
                        rightVar.borrowFrom.borrowState.immutableBorrows += 1;
                    }
                }
            } else if (ctx.expression() instanceof BorrowContext || ctx.expression() instanceof MutBorrowContext) {
                this.compile_time_environment_type_look_up(ce, name).borrowFrom =
                    this.compile_time_environment_type_look_up(ce, (ctx.expression() as BorrowContext).NAME().getText())
            }

            return {type: variable.type, parameterType: variable.parameterType, returnType: variable.returnType};
        }
    }
    visitPtrAssignment(ctx: PtrAssignmentContext): CompileTimeTypeEnvironmentToType {
        return ce => {
            const name = ctx.NAME().getText();
            const variable = this.compile_time_environment_type_look_up(ce, name);
            const innerType = variable.type

            if (!innerType.startsWith('*')) {
                throw new Error(`Cannot dereference non-reference type '${innerType}'`);
            }

            if (variable.borrowFrom) {
                if (variable.borrowFrom.dropped) {
                    throw new Error(`The pointer ${name} is invalid as it is pointing to a dropped variable`)
                }
            }

            if (variable.moved) {
                throw new Error(`The pointer ${name} is moved`)
            }

            // Extract the base type (remove the reference)
            const baseType = innerType.replace(/^\*(mut )?/, '');

            // If it's an assignment target, ensure the reference is mutable
            if (!innerType.includes('mut')) {
                throw new Error(`Cannot modify through an immutable reference`);
            }

            const rightType = this.visit(ctx.expression())(ce);
            if (baseType !== rightType.type) {
                throw new Error(`Type mismatch: expected '${baseType}', found '${rightType.type}'`);
            }

            return {type: baseType};
        }
    }

    visitMutConstDecl(ctx: MutConstDeclContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let declared_type = ctx.type().getText()
            let name = ctx.NAME().getText()
            let actual_type = this.visit(ctx.expression())(ce)
            if (declared_type == actual_type.type) {
                if (ctx.expression() instanceof VariableContext) {
                    const rightName = (ctx.expression() as VariableContext).NAME().getText();
                    const rightVar = this.compile_time_environment_type_look_up(ce, rightName);
                    // Only move if it's not a reference
                    if (rightVar.type !== 'int' && rightVar.type !== 'bool' && rightVar.type !== '*int' && rightVar.type !== '*bool') {
                        rightVar.moved = true;
                    } if (rightVar.type.startsWith("*")) {
                        this.compile_time_environment_type_look_up(ce, name).borrowFrom = rightVar.borrowFrom;
                        if (!rightVar.type.includes("mut")) {
                            rightVar.borrowFrom.borrowState.immutableBorrows += 1;
                        }
                    }
                } else if (ctx.expression() instanceof BorrowContext || ctx.expression() instanceof MutBorrowContext) {
                    this.compile_time_environment_type_look_up(ce, name).borrowFrom =
                        this.compile_time_environment_type_look_up(ce, (ctx.expression() as BorrowContext).NAME().getText())
                }
                return actual_type
            } else {
                throw new Error(`Expected type ${declared_type}, actual type ${actual_type.type}`)
            }
        }
    }


    visitBlock(ctx: BlockContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let vs = this.scan_sequence(ctx.sequence(), ce)
            let e = this.compile_time_environment_extend(vs, ce)
            const result = this.visit(ctx.sequence())(e);
            for (const v of vs) {
                if (v.borrowFrom) {
                    // This local variable borrowed from another variable
                    const borrowedVariable = v.borrowFrom;

                    // Determine what type of borrow it was and decrement the appropriate counter
                    if (v.type.includes('*mut')) {
                        // It was a mutable borrow
                        borrowedVariable.borrowState.mutableBorrows--;
                    } else if (v.type.startsWith('*')) {
                        // It was an immutable borrow
                        borrowedVariable.borrowState.immutableBorrows--;
                    }
                }
                v.dropped = true;
            }
            return result
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
            if (lookupResult.moved) {
                throw new Error(`reference to name ${name} has been moved`)
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

    visitComparison(ctx: ComparisonContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let op1_type = this.visit(ctx.expression(0))(ce)
            let op2_type = this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (op1_type.type !== "int" || op2_type.type !== "int") {
                throw new Error(`Expect two numbers for ${op}, but got ${op1_type.type} and ${op2_type.type}`)
            }
            return {type : "bool"}
        }
    }

    visitEquality(ctx: EqualityContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            let op1_type = this.visit(ctx.expression(0))(ce)
            let op2_type = this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (! (op1_type.type === op2_type.type && (op1_type.type === "int" || op1_type.type === "bool")) ) {
                throw new Error(`Expect two numbers or booleans for ${op}, but got ${op1_type.type} and ${op2_type.type}`)
            }
            return {type : "bool"}
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

    visitString(ctx: StringContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "string"}
        }
    }

    visitUndefined(ctx: UndefinedContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "undefined"}
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

    visitBoolPointerType(ctx: BoolPointerTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "*bool"}
        }
    }
    visitBoolMutPointerTypeBoolPointerType(ctx: BoolMutPointerTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "*mut bool"}
        }
    }

    visitIntPointerType(ctx: IntPointerTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "*int"}
        }
    }

    visitIntMutPointerType(ctx: IntMutPointerTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "*mut int"}
        }
    }

    visitStringType(ctx: StringTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "string"}
        }
    }

    visitStringPointerType(ctx: StringPointerTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "*string"}
        }
    }

    visitStringMutPointerType(ctx: StringMutPointerTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "*mut string"}
        }
    }

    visitUndefinedType (ctx : UndefinedTypeContext) : CompileTimeTypeEnvironmentToType {
        return ce => {
            return {type: "undefined"}
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