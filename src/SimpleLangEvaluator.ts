import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { SimpleLangTypeChecker} from  './SimpleLangTypeChecker'
import { RustingCompiler} from "./RustingCompiler";
import {
    BorrowContext,
    MutBorrowContext,
    DereferenceContext,
    AssignmentContext,
    MutConstDeclContext,
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
import {RustingMachine} from "./RustingMachine";

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
};


type StringMatrixFunction = (arg: string[][]) => undefined;



export class SimpleLangEvaluator extends BasicEvaluator {
    private executionCount: number;
    private compiler : RustingCompiler;
    private typeChecker: SimpleLangTypeChecker;
    private runner : RustingMachine

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.compiler = new RustingCompiler();
        this.typeChecker = new SimpleLangTypeChecker()
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

            let global_ce : string[][] = []
            let global_type_ce : TypeClosure[][] = []
            this.typeChecker.visit(tree)(global_type_ce)
            this.compiler.visit(tree)(global_ce)
            this.runner = new RustingMachine(this.compiler.instruction)

            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${String(this.runner.run())}`);
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


export class Parser {
    private lexer: SimpleLangLexer;
    private parser: SimpleLangParser;
    private inputStream: CharStream;
    private tokenStream: CommonTokenStream;

    constructor(str : string) {
        this.inputStream = CharStream.fromString(str);
        this.lexer = new SimpleLangLexer(this.inputStream);
        this.tokenStream = new CommonTokenStream(this.lexer);
        this.parser = new SimpleLangParser(this.tokenStream);
    }

    public parse(): ProgContext {
        return this.parser.prog();
    }
}

export class Evaluator {
    private executionCount: number;
    private visitor: RustingCompiler;
    private typeChecker: SimpleLangTypeChecker;
    private machine : RustingMachine;

    constructor() {
        this.executionCount = 0;
        this.visitor = new RustingCompiler();
        this.typeChecker = new SimpleLangTypeChecker()

    }

    public typeCheck(str: string): string {
        this.executionCount++;


        // Parse the input
        const tree = (new Parser(str)).parse();

        console.log(tree.toStringTree())

        let global_ce: string[][] = []
        let global_type_ce: TypeClosure[][] = []
        return this.typeChecker.visit(tree)(global_type_ce).type
    }

    public evaluate(str: string): string {
        this.executionCount++;


        // Parse the input
        const tree = (new Parser(str)).parse();
        try {
        let global_ce: string[][] = []
        let global_type_ce: TypeClosure[][] = []
        console.log(this.typeChecker.visit(tree)(global_type_ce))
        this.visitor.visit(tree)(global_ce)
            //console.log(this.visitor.instructions_for_display());
        this.machine = new RustingMachine(this.visitor.instruction)


        // Send the result to the REPL
        return String(this.machine.run())
        }   catch (error) {
        // Handle errors and send them to the REPL
        if (error instanceof Error) {
            return (`Error: ${error.message}`);
        } else {
            return (`Error: ${String(error)}`);
        }
    }
    }

}