import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import {
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

class SimpleLangEvaluatorVisitor extends AbstractParseTreeVisitor<undefined> implements SimpleLangVisitor<undefined> {
    // Visit a parse tree produced by SimpleLangParser#prog
    instruction : object[] = []
    wc : number = 0
    ce : string[][] = []
    visitProg(ctx: ProgContext): undefined {
        this.instruction[this.wc++] = {tag: "Enter Scope"}
        this.visit(ctx.sequence());
        this.instruction[this.wc++] = {tag: "Exit Scope"}
        this.instruction[this.wc++] = {tag: "Done"}
    }

    visitSequence(ctx: SequenceContext) : undefined {
        let statements = ctx.statement()
        if (statements.length == 0) {
            this.instruction[this.wc++] = {tag: "LDC", val: undefined}
        } else {
            let is_first = true;
            for (let statement of statements) {
                if (is_first) {
                    this.visit(statement)
                    is_first = false;
                } else {
                    this.instruction[this.wc++] = ({tag: "Pop"})
                    this.visit(statement)
                }
            }
        }

    }

    visitExprStmt(ctx: ExprStmtContext) : undefined {
        this.visit(ctx.expression())
    }

    visitReturnStmt(ctx: ReturnStmtContext) : undefined {
        this.visit(ctx.expression())
        this.instruction[this.wc++] = {tag: "RESET"}
    }

    visitConstDecl(ctx: ConstDeclContext) : undefined {
        let type = ctx.type().getText()
        let name = ctx.NAME().getText()
        this.visit(ctx.expression());
        this.instruction[this.wc++] = {tag: "Assignment", name: name, type: type};

    }

    visitIfStmt(ctx: IfStmtContext) : undefined {
        this.visit(ctx.expression())
        let jof_instruction = {tag:"JOF", address: 0}
        this.instruction[this.wc++] = jof_instruction;
        this.visit(ctx.block(0))
        let goto_instruction = {tag:"Goto", address: 0}
        this.instruction[this.wc++] = goto_instruction
        jof_instruction.address = this.wc
        this.visit(ctx.block(1))
        goto_instruction.address = this.wc
    }

    visitWhileStmt(ctx: WhileStmtContext) : undefined {
        let loopStart = this.wc
        this.visit(ctx.expression())
        let jof_instruction = {tag:"JOF", address: 0}
        let goto_instruction = {tag:"Goto", address: loopStart}
        this.instruction[this.wc++] = jof_instruction
        this.visit(ctx.block())
        this.instruction[this.wc++] = goto_instruction
        jof_instruction.address = this.wc
    }

    visitBlockStmt(ctx: BlockStmtContext) : undefined {
        this.visit(ctx.block())
    }

    visitBlock(ctx: BlockContext) : undefined {
        this.visit(ctx.sequence())
    }

    visitNot(ctx: NotContext) : undefined {
        this.visit(ctx.expression())
        this.instruction[this.wc++] = {tag: "UNOP", op: "!"}
    }

    visitVariable(ctx: VariableContext) : undefined {
        this.instruction[this.wc++] = {tag: "LD", name: ctx.NAME().getText(), pos : 0}
    }

    visitMulDiv(ctx: MulDivContext) : undefined {
        this.visit(ctx.expression(0))
        this.visit(ctx.expression(1))
        let op = ctx.getChild(1).getText()
        if (op == "*") {
            this.instruction[this.wc++] = {tag: "BINOP", op: "*"}
        } else if (op == "/") {
            this.instruction[this.wc++] = {tag: "BINOP", op: "/"}
        } else {
            reportError("unknown operator: " + op);
        }
    }

    visitAddSub(ctx: AddSubContext): undefined {
        this.visit(ctx.expression(0))
        this.visit(ctx.expression(1))
        let op = ctx.getChild(1).getText()
        if (op == "+") {
            this.instruction[this.wc++] = {tag: "BINOP", op: "+"}
        } else if (op == "-") {
            this.instruction[this.wc++] = {tag: "BINOP", op: "-"}
        } else {
            reportError("unknown operator: " + op);
        }
    }

    visitParens(ctx: ParensContext) : undefined {
        this.visit(ctx.expression())
    }

    visitLiterals(ctx: LiteralsContext) : undefined {
        this.visit(ctx.literal())
    }

    visitLogical(ctx: LogicalContext) : undefined {
        this.visit(ctx.expression(0))
        this.visit(ctx.expression(1))
        let op = ctx.getChild(1).getText()
        if (op == "&&") {
            this.instruction[this.wc++] = {tag: "BINOP", op: "&&"}
        } else if (op == "||") {
            this.instruction[this.wc++] = {tag: "BINOP", op: "||"}
        } else {
            reportError("unknown operator: " + op);
        }
    }

    visitNegate(ctx: NegateContext) : undefined {
        this.visit(ctx.expression())
        this.instruction[this.wc++] = {tag: "UNOP", op: "-"}
    }

    visitLambda(ctx: LambdaContext) : undefined {
        this.visit(ctx.lambdaExpr())
    }

    visitInteger(ctx: IntegerContext) : undefined {
        this.instruction[this.wc++] = {tag: "LDC", value: parseInt(ctx.INTEGER().getText())}
    }

    parseBool(input:string): boolean {
        if (input == "true") {
            return true
        } else if (input == "false") {
            return false
        } else {
            reportError("unknown boolean value: " + input);
        }
    }
    visitBoolean(ctx: BooleanContext) : undefined {
        this.instruction[this.wc++] = {tag: "LDC", value: this.parseBool(ctx.BOOLEAN().getText())}
    }

    visitLambdaExpr(ctx: LambdaExprContext) : undefined {
        this.instruction[this.wc++] = {tag: 'LDF', arity: (ctx.NAME()).length, addr: this.wc + 1};
        const goto_instruction = {tag: 'GOTO', address: 0}
        this.instruction[this.wc++] = goto_instruction
        this.visit(ctx.block())
        this.instruction[this.wc++] = {tag: 'LDC', val: undefined}
        this.instruction[this.wc++] = {tag: 'RESET'}
        goto_instruction.address = this.wc
    }

    instructions_for_display() : string {
        let result = ""
        let i = 0
        for (const item of this.instruction) {
            result += (i.toString() + " " + JSON.stringify(item) + "\n")
        }
        return result
    }



}

export class SimpleLangEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor : SimpleLangEvaluatorVisitor;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new SimpleLangEvaluatorVisitor();
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new SimpleLangLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new SimpleLangParser(tokenStream);

            // Parse the input
            const tree = parser.prog();

            this.visitor.visit(tree)

            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${this.visitor.instructions_for_display()}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}