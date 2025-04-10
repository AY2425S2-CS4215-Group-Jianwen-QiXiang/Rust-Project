import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import {CharStream, CommonTokenStream, AbstractParseTreeVisitor, ParseTree} from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { SimpleLangTypeChecker} from  './SimpleLangTypeChecker'
import {
    StringContext,
    PtrAssignmentContext,
    EqualityContext,
    ComparisonContext,
    BorrowContext,
    MutBorrowContext,
    DereferenceContext,
    AssignmentContext,
    MutConstDeclContext,
    UndefinedContext,
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
    SimpleLangParser,
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
    borrowState: {
        mutableBorrows: number;
        immutableBorrows: number;
    };
    borrowFrom?: string;
    parameterType?: TypeObject[];
    returnType?: TypeObject;
};


type StringMatrixFunction = (arg: string[][]) => undefined;

export class RustedCompiler extends AbstractParseTreeVisitor<StringMatrixFunction> implements SimpleLangVisitor<StringMatrixFunction> {
    // Visit a parse tree produced by SimpleLangParser#prog
    instruction : object[] = []
    wc : number = 0

    my_push (array, ...items) {
        for (let item of items) {
            array.push(item)
        }
        return array
    }

    compile_time_environment_extend (vs: string[], e: string[][]) {
        //  make shallow copy of e
        return this.my_push([...e], vs)
    }

    compile_time_environment_position (env:string[][], x : string): [number, number] {
        let frame_index : number = env.length
        while (this.value_index(env[--frame_index], x) === -1) {
            if(frame_index == 0) {
                throw new Error(`Unbounded name: ${x}, current compile time environment: ${env}`)
            }
        }
        return [frame_index,
            this.value_index(env[frame_index], x)]
    }

    value_index (frame: string[], x : string) :number {
        for (let i = 0; i < Object.keys(frame).length; i++) {
            if (frame[i] === x) return i
        }
        return -1;
    }

    scan_statement(ctx : StatementContext) : string[] {
        if (ctx instanceof ConstDeclContext) {
            return [ctx.NAME().getText()]
        } else if (ctx instanceof FunctionDeclContext) {
            return [ctx.NAME()[0].getText()]
        } else if (ctx instanceof MutConstDeclContext) {
            return [ctx.NAME().getText()]
        } else {
            return []
        }
    }

    scan_sequence(ctx : SequenceContext) : string[] {
        return ctx.statement().reduce((acc, x) => acc.concat(this.scan_statement(x)),
            [])
    }

    visitProg(ctx: ProgContext): StringMatrixFunction {
        return ce => {
            let vs = this.scan_sequence(ctx.sequence())
            let e = this.compile_time_environment_extend(vs, ce)
            this.instruction[this.wc++] = {tag: "ENTER_SCOPE", size : vs.length}
            this.visit(ctx.sequence())(e);
            this.instruction[this.wc++] = {tag: "EXIT_SCOPE"}
            this.instruction[this.wc++] = {tag: "DONE"}}
    }

    visitSequence(ctx: SequenceContext) : StringMatrixFunction {
        return ce => {
            let statements = ctx.statement()
            if (statements.length == 0) {
                this.instruction[this.wc++] = {tag: "LDC", val: undefined}
            } else {
                let is_first = true;
                for (let statement of statements) {
                    if (is_first) {
                        this.visit(statement)(ce)
                        is_first = false;
                    } else {
                        this.instruction[this.wc++] = ({tag: "POP"})
                        this.visit(statement)(ce)
                    }
                }
            }

        }
    }

    visitExprStmt(ctx: ExprStmtContext) : StringMatrixFunction {
        return this.visit(ctx.expression())
    }

    visitReturnStmt(ctx: ReturnStmtContext) : StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression())(ce)
            this.instruction[this.wc++] = {tag: "RESET"}
        }
    }

    visitConstDecl(ctx: ConstDeclContext) : StringMatrixFunction {
        return ce => {
            let name = ctx.NAME().getText()
            this.visit(ctx.expression())(ce)
            this.instruction[this.wc++] = {tag: "ASSIGN", name: name,
                pos: this.compile_time_environment_position(ce, name)};
        }
    }

    visitMutConstDecl(ctx: ConstDeclContext) : StringMatrixFunction {
        return ce => {
            let name = ctx.NAME().getText()
            this.visit(ctx.expression())(ce)
            this.instruction[this.wc++] = {tag: "ASSIGN", name: name,
                pos: this.compile_time_environment_position(ce, name)};
        }
    }

    visitAssignment(ctx: AssignmentContext) : StringMatrixFunction {
        return ce => {
            let name = ctx.NAME().getText()
            this.visit(ctx.expression())(ce)
            this.instruction[this.wc++] = {tag: "ASSIGN", name: name,
                pos: this.compile_time_environment_position(ce, name)};
        }
    }

    visitPtrAssignment(ctx: PtrAssignmentContext) : StringMatrixFunction {
        return ce => {
            let name = ctx.NAME().getText()
            this.visit(ctx.expression())(ce)
            this.instruction[this.wc++] = {tag: "LD", name: name, pos : this.compile_time_environment_position(ce, name)}
            this.instruction[this.wc++] = {tag: "PTRASSIGN"};
        }
    }


    visitIfStmt(ctx: IfStmtContext) : StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression())(ce)
            let jof_instruction = {tag:"JOF", address: 0}
            this.instruction[this.wc++] = jof_instruction;
            this.visit(ctx.block(0))(ce)
            let goto_instruction = {tag:"GOTO", address: 0}
            this.instruction[this.wc++] = goto_instruction
            jof_instruction.address = this.wc
            this.visit(ctx.block(1))(ce)
            goto_instruction.address = this.wc
        }

    }

    visitWhileStmt(ctx: WhileStmtContext) : StringMatrixFunction {
        return ce => {
            let loopStart = this.wc
            this.visit(ctx.expression())(ce)
            let jof_instruction = {tag:"JOF", address: 0}
            let goto_instruction = {tag:"GOTO", address: loopStart}
            this.instruction[this.wc++] = jof_instruction
            this.visit(ctx.block())(ce)
            this.instruction[this.wc++] = {tag:"POP"}
            this.instruction[this.wc++] = goto_instruction
            jof_instruction.address = this.wc
            this.instruction[this.wc++] = {tag:"LDC", value: undefined}
        }

    }

    visitBlockStmt(ctx: BlockStmtContext) : StringMatrixFunction {
        return this.visit(ctx.block())
    }

    visitFunctionDecl(ctx: FunctionDeclContext) : StringMatrixFunction {
        return ce => {
            let functionName = ctx.NAME()[0].getText()
            this.instruction[this.wc++] = {tag: 'LDF', arity: (ctx.NAME()).length - 1, addr: this.wc + 1};
            const goto_instruction = {tag: 'GOTO', address: 0}
            this.instruction[this.wc++] = goto_instruction
            let allNames = ctx.NAME()
            let parameterName: string[] = []
            for (let i = 1; i < allNames.length; i++) {
                parameterName[i - 1] = allNames[i].getText()
            }
            let e = this.compile_time_environment_extend(parameterName, ce)
            this.visit(ctx.block())(e)
            this.instruction[this.wc++] = {tag: 'LDC', val: undefined}
            this.instruction[this.wc++] = {tag: 'RESET'}
            goto_instruction.address = this.wc
            this.instruction[this.wc++] = {tag: "ASSIGN", name: functionName,
                pos: this.compile_time_environment_position(ce, functionName)};
        }
    }

    visitFunctionApp(ctx: FunctionAppContext) : StringMatrixFunction {
        return ce => {
            let functionName = ctx.NAME().getText()
            this.instruction[this.wc++] = {tag: 'LD', name:functionName,
                pos: this.compile_time_environment_position(ce, functionName)}
            let parameters = ctx.expression()
            for (let parameter of parameters) {
                this.visit(parameter)(ce)
            }
            this.instruction[this.wc++] = {tag: 'CALL', arity: parameters.length}
        }
    }

    visitBlock(ctx: BlockContext) : StringMatrixFunction {
        return ce => {
            let vs = this.scan_sequence(ctx.sequence())
            let e = this.compile_time_environment_extend(vs, ce)
            this.instruction[this.wc++] = {tag: "ENTER_SCOPE", size : vs.length}
            this.visit(ctx.sequence())(e);
            this.instruction[this.wc++] = {tag: "EXIT_SCOPE"}
        }
    }

    visitNot(ctx: NotContext) : StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression())(ce)
            this.instruction[this.wc++] = {tag: "UNOP", op: "!"}
        }

    }

    visitVariable(ctx: VariableContext) : StringMatrixFunction {
        return  ce => {
            let name = ctx.NAME().getText()
            this.instruction[this.wc++] = {tag: "LD", name: name, pos : this.compile_time_environment_position(ce, name)}
        }
    }

    visitBorrow(ctx: BorrowContext) : StringMatrixFunction {
        return ce => {
            let name = ctx.NAME().getText()
            let pos = this.compile_time_environment_position(ce, name)
            this.instruction[this.wc++] = {tag: "LDP", pos : pos}
        }
    }

    visitMutBorrow(ctx: MutBorrowContext) : StringMatrixFunction {
        return ce => {
            let name = ctx.NAME().getText()
            let pos = this.compile_time_environment_position(ce, name)
            this.instruction[this.wc++] = {tag: "LDP", pos : pos}
        }
    }

    visitDereference(ctx: DereferenceContext) : StringMatrixFunction {
        return ce => {
            let name = ctx.NAME().getText()
            this.instruction[this.wc++] = {tag: "LD", name: name, pos : this.compile_time_environment_position(ce, name)}
            this.instruction[this.wc++] = {tag: "DEREF"}
        }
    }

    visitMulDiv(ctx: MulDivContext) : StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression(0))(ce)
            this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (op == "*") {
                this.instruction[this.wc++] = {tag: "BINOP", op: "*"}
            } else if (op == "/") {
                this.instruction[this.wc++] = {tag: "BINOP", op: "/"}
            } else {
                throw new Error("unknown operator: " + op);
            }
        }

    }

    visitAddSub(ctx: AddSubContext): StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression(0))(ce)
            this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (op == "+") {
                this.instruction[this.wc++] = {tag: "BINOP", op: "+"}
            } else if (op == "-") {
                this.instruction[this.wc++] = {tag: "BINOP", op: "-"}
            } else {
                throw new Error("unknown operator: " + op);
            }
        }

    }

    visitParens(ctx: ParensContext) : StringMatrixFunction {
        return this.visit(ctx.expression())
    }

    visitLiterals(ctx: LiteralsContext) : StringMatrixFunction {
        return this.visit(ctx.literal())
    }

    visitLogical(ctx: LogicalContext) : StringMatrixFunction {
        return  ce => {
            this.visit(ctx.expression(0))(ce)
            this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            if (op == "&&") {
                this.instruction[this.wc++] = {tag: "BINOP", op: "&&"}
            } else if (op == "||") {
                this.instruction[this.wc++] = {tag: "BINOP", op: "||"}
            } else {
                throw new Error("unknown operator: " + op);
            }
        }

    }

    visitNegate(ctx: NegateContext) : StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression())(ce)
            this.instruction[this.wc++] = {tag: "UNOP", op: "-"}
        }

    }

    visitComparison(ctx: ComparisonContext) : StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression(0))(ce)
            this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            this.instruction[this.wc++] = {tag:"BINOP", op:op}
        }
    }

    visitEquality(ctx: EqualityContext) : StringMatrixFunction {
        return ce => {
            this.visit(ctx.expression(0))(ce)
            this.visit(ctx.expression(1))(ce)
            let op = ctx.getChild(1).getText()
            this.instruction[this.wc++] = {tag:"BINOP", op:op}
        }
    }

    visitLambda(ctx: LambdaContext) : StringMatrixFunction {
        return this.visit(ctx.lambdaExpr())
    }

    visitInteger(ctx: IntegerContext) : StringMatrixFunction {
        return ce => {
            this.instruction[this.wc++] = {tag: "LDC", value: parseInt(ctx.INTEGER().getText())}
        }

    }

    parseBool(input:string): boolean {
        if (input == "true") {
            return true
        } else if (input == "false") {
            return false
        } else {
            throw new Error("unknown boolean value: " + input);
        }
    }
    visitBoolean(ctx: BooleanContext) : StringMatrixFunction {
        return ce => {
            this.instruction[this.wc++] = {tag: "LDC", value: this.parseBool(ctx.BOOLEAN().getText())}
        }
    }

    visitString(ctx: StringContext) : StringMatrixFunction {
        return ce=> {
            this.instruction[this.wc++] = {tag: "LDC", value: ctx.STRING().getText()}
        }
    }

    visitUndefined(ctx: UndefinedContext) : StringMatrixFunction {
        return ce => {
            this.instruction[this.wc++] = {tag: "LDC", value: undefined }
        }
    }

    visitLambdaExpr(ctx: LambdaExprContext) : StringMatrixFunction {
        return ce => {
            this.instruction[this.wc++] = {tag: 'LDF', arity: (ctx.NAME()).length, addr: this.wc + 1};
            const goto_instruction = {tag: 'GOTO', address: 0}
            this.instruction[this.wc++] = goto_instruction
            this.visit(ctx.block())(ce)
            this.instruction[this.wc++] = {tag: 'LDC', val: undefined}
            this.instruction[this.wc++] = {tag: 'RESET'}
            goto_instruction.address = this.wc
        }

    }

    instructions_for_display() : string {
        let result = "\n"
        let i = 0
        for (const item of this.instruction) {
            result += (i.toString() + " " + JSON.stringify(item) + "\n")
            i++
        }
        return result
    }

}

