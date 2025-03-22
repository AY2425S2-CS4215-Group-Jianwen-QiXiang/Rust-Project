import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import {
    TypeContext,
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

class SimpleLangEvaluatorVisitor extends AbstractParseTreeVisitor<string[]> implements SimpleLangVisitor<string[]> {
    // Visit a parse tree produced by SimpleLangParser#prog
    visitProg(ctx: ProgContext): string[] {
        let result : string[] = []
        result.push("Enter Scope")
        result.concat(this.visit(ctx.sequence()));
        result.push("Enter Scope")
        return result;
    }

    visitSequence(ctx: SequenceContext) : string[] {
        let statements = ctx.statement()
        let result : string[] = []
        let is_first = true;
        for (let statement of statements) {
            if (is_first) {
                result.concat(this.visit(statement))
                is_first = false;
            } else {
                result.push("Pop")
                result.concat(this.visit(statement))
            }
        }
        return result
    }

    visitExprStmt(ctx: ExprStmtContext) : string[] {
        return this.visit(ctx.expression())
    }

    visitConstDecl(ctx: ConstDeclContext) : string[] {
        let result : string[] = []
        let type = ctx.type().getChild(0)
        return result
    }

    visitType(ctx: TypeContext) : string[] {
        let result: string[] = []
        return result
    }

}

export class SimpleLangEvaluator extends BasicEvaluator {
    private executionCount: number;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
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
            
            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${tree.toStringTree(parser)}`);
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