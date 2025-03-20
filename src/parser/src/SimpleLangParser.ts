// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SimpleLangListener } from "./SimpleLangListener.js";
import { SimpleLangVisitor } from "./SimpleLangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SimpleLangParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly INTEGER = 21;
    public static readonly NAME = 22;
    public static readonly BOOLEAN = 23;
    public static readonly SEPARATOR = 24;
    public static readonly RULE_prog = 0;
    public static readonly RULE_sequence = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_block = 3;
    public static readonly RULE_expression = 4;
    public static readonly RULE_literal = 5;
    public static readonly RULE_lambdaExpr = 6;
    public static readonly RULE_type = 7;

    public static readonly literalNames = [
        null, "';'", "'let'", "'='", "'if'", "'('", "')'", "'else'", "'while'", 
        "'{'", "'}'", "'-'", "'!'", "'*'", "'/'", "'+'", "'&&'", "'||'", 
        "'=>'", "'int'", "'bool'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "INTEGER", 
        "NAME", "BOOLEAN", "SEPARATOR"
    ];
    public static readonly ruleNames = [
        "prog", "sequence", "statement", "block", "expression", "literal", 
        "lambdaExpr", "type",
    ];

    public get grammarFileName(): string { return "SimpleLang.g4"; }
    public get literalNames(): (string | null)[] { return SimpleLangParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangParser.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangParser.ruleNames; }
    public get serializedATN(): number[] { return SimpleLangParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SimpleLangParser._ATN, SimpleLangParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SimpleLangParser.RULE_prog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 16;
            this.sequence();
            this.state = 17;
            this.match(SimpleLangParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sequence(): SequenceContext {
        let localContext = new SequenceContext(this.context, this.state);
        this.enterRule(localContext, 2, SimpleLangParser.RULE_sequence);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 21;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                {
                this.state = 19;
                this.statement();
                }
                break;
            case 2:
                {
                this.state = 20;
                this.expression(0);
                }
                break;
            }
            this.state = 30;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24) {
                {
                {
                this.state = 23;
                this.match(SimpleLangParser.SEPARATOR);
                this.state = 26;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                case 1:
                    {
                    this.state = 24;
                    this.statement();
                    }
                    break;
                case 2:
                    {
                    this.state = 25;
                    this.expression(0);
                    }
                    break;
                }
                }
                }
                this.state = 32;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 4, SimpleLangParser.RULE_statement);
        try {
            this.state = 56;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__4:
            case SimpleLangParser.T__10:
            case SimpleLangParser.T__11:
            case SimpleLangParser.T__17:
            case SimpleLangParser.INTEGER:
            case SimpleLangParser.NAME:
            case SimpleLangParser.BOOLEAN:
                localContext = new ExprStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 33;
                this.expression(0);
                this.state = 34;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case SimpleLangParser.T__1:
                localContext = new ConstDeclContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 36;
                this.match(SimpleLangParser.T__1);
                this.state = 37;
                this.type_();
                this.state = 38;
                this.match(SimpleLangParser.NAME);
                this.state = 39;
                this.match(SimpleLangParser.T__2);
                this.state = 40;
                this.expression(0);
                }
                break;
            case SimpleLangParser.T__3:
                localContext = new IfStmtContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 42;
                this.match(SimpleLangParser.T__3);
                this.state = 43;
                this.match(SimpleLangParser.T__4);
                this.state = 44;
                this.expression(0);
                this.state = 45;
                this.match(SimpleLangParser.T__5);
                this.state = 46;
                this.block();
                this.state = 47;
                this.match(SimpleLangParser.T__6);
                this.state = 48;
                this.block();
                }
                break;
            case SimpleLangParser.T__7:
                localContext = new WhileStmtContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 50;
                this.match(SimpleLangParser.T__7);
                this.state = 51;
                this.match(SimpleLangParser.T__4);
                this.state = 52;
                this.expression(0);
                this.state = 53;
                this.match(SimpleLangParser.T__5);
                this.state = 54;
                this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 6, SimpleLangParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 58;
            this.match(SimpleLangParser.T__8);
            this.state = 59;
            this.sequence();
            this.state = 60;
            this.match(SimpleLangParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 8;
        this.enterRecursionRule(localContext, 8, SimpleLangParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 74;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                {
                localContext = new NegateContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 63;
                this.match(SimpleLangParser.T__10);
                this.state = 64;
                this.expression(9);
                }
                break;
            case 2:
                {
                localContext = new NotContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 65;
                this.match(SimpleLangParser.T__11);
                this.state = 66;
                this.expression(8);
                }
                break;
            case 3:
                {
                localContext = new ParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 67;
                this.match(SimpleLangParser.T__4);
                this.state = 68;
                this.expression(0);
                this.state = 69;
                this.match(SimpleLangParser.T__5);
                }
                break;
            case 4:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 71;
                this.lambdaExpr();
                }
                break;
            case 5:
                {
                localContext = new LiteralsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 72;
                this.literal();
                }
                break;
            case 6:
                {
                localContext = new VariableContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 73;
                this.match(SimpleLangParser.NAME);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 87;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 85;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 76;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 77;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 13 || _la === 14)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 78;
                        this.expression(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 79;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 80;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 11 || _la === 15)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 81;
                        this.expression(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 82;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 83;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 16 || _la === 17)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 84;
                        this.expression(6);
                        }
                        break;
                    }
                    }
                }
                this.state = 89;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 10, SimpleLangParser.RULE_literal);
        try {
            this.state = 92;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.INTEGER:
                localContext = new IntegerContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 90;
                this.match(SimpleLangParser.INTEGER);
                }
                break;
            case SimpleLangParser.BOOLEAN:
                localContext = new BooleanContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 91;
                this.match(SimpleLangParser.BOOLEAN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaExpr(): LambdaExprContext {
        let localContext = new LambdaExprContext(this.context, this.state);
        this.enterRule(localContext, 12, SimpleLangParser.RULE_lambdaExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 22) {
                {
                {
                this.state = 94;
                this.match(SimpleLangParser.NAME);
                }
                }
                this.state = 99;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 100;
            this.match(SimpleLangParser.T__17);
            this.state = 101;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 14, SimpleLangParser.RULE_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 103;
            _la = this.tokenStream.LA(1);
            if(!(_la === 19 || _la === 20)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 4:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 7);
        case 1:
            return this.precpred(this.context, 6);
        case 2:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,24,106,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,3,1,22,8,1,1,1,1,1,1,1,3,1,27,8,1,
        5,1,29,8,1,10,1,12,1,32,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,57,8,
        2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,3,4,75,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,86,8,4,10,4,
        12,4,89,9,4,1,5,1,5,3,5,93,8,5,1,6,5,6,96,8,6,10,6,12,6,99,9,6,1,
        6,1,6,1,6,1,7,1,7,1,7,0,1,8,8,0,2,4,6,8,10,12,14,0,4,1,0,13,14,2,
        0,11,11,15,15,1,0,16,17,1,0,19,20,113,0,16,1,0,0,0,2,21,1,0,0,0,
        4,56,1,0,0,0,6,58,1,0,0,0,8,74,1,0,0,0,10,92,1,0,0,0,12,97,1,0,0,
        0,14,103,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,0,19,22,
        3,4,2,0,20,22,3,8,4,0,21,19,1,0,0,0,21,20,1,0,0,0,22,30,1,0,0,0,
        23,26,5,24,0,0,24,27,3,4,2,0,25,27,3,8,4,0,26,24,1,0,0,0,26,25,1,
        0,0,0,27,29,1,0,0,0,28,23,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,
        31,1,0,0,0,31,3,1,0,0,0,32,30,1,0,0,0,33,34,3,8,4,0,34,35,5,1,0,
        0,35,57,1,0,0,0,36,37,5,2,0,0,37,38,3,14,7,0,38,39,5,22,0,0,39,40,
        5,3,0,0,40,41,3,8,4,0,41,57,1,0,0,0,42,43,5,4,0,0,43,44,5,5,0,0,
        44,45,3,8,4,0,45,46,5,6,0,0,46,47,3,6,3,0,47,48,5,7,0,0,48,49,3,
        6,3,0,49,57,1,0,0,0,50,51,5,8,0,0,51,52,5,5,0,0,52,53,3,8,4,0,53,
        54,5,6,0,0,54,55,3,6,3,0,55,57,1,0,0,0,56,33,1,0,0,0,56,36,1,0,0,
        0,56,42,1,0,0,0,56,50,1,0,0,0,57,5,1,0,0,0,58,59,5,9,0,0,59,60,3,
        2,1,0,60,61,5,10,0,0,61,7,1,0,0,0,62,63,6,4,-1,0,63,64,5,11,0,0,
        64,75,3,8,4,9,65,66,5,12,0,0,66,75,3,8,4,8,67,68,5,5,0,0,68,69,3,
        8,4,0,69,70,5,6,0,0,70,75,1,0,0,0,71,75,3,12,6,0,72,75,3,10,5,0,
        73,75,5,22,0,0,74,62,1,0,0,0,74,65,1,0,0,0,74,67,1,0,0,0,74,71,1,
        0,0,0,74,72,1,0,0,0,74,73,1,0,0,0,75,87,1,0,0,0,76,77,10,7,0,0,77,
        78,7,0,0,0,78,86,3,8,4,8,79,80,10,6,0,0,80,81,7,1,0,0,81,86,3,8,
        4,7,82,83,10,5,0,0,83,84,7,2,0,0,84,86,3,8,4,6,85,76,1,0,0,0,85,
        79,1,0,0,0,85,82,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,
        0,88,9,1,0,0,0,89,87,1,0,0,0,90,93,5,21,0,0,91,93,5,23,0,0,92,90,
        1,0,0,0,92,91,1,0,0,0,93,11,1,0,0,0,94,96,5,22,0,0,95,94,1,0,0,0,
        96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,
        0,0,0,100,101,5,18,0,0,101,102,3,6,3,0,102,13,1,0,0,0,103,104,7,
        3,0,0,104,15,1,0,0,0,9,21,26,30,56,74,85,87,92,97
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangParser.__ATN) {
            SimpleLangParser.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangParser._serializedATN);
        }

        return SimpleLangParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangParser.literalNames, SimpleLangParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangParser.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sequence(): SequenceContext {
        return this.getRuleContext(0, SequenceContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_prog;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public SEPARATOR(): antlr.TerminalNode[];
    public SEPARATOR(i: number): antlr.TerminalNode | null;
    public SEPARATOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SimpleLangParser.SEPARATOR);
    	} else {
    		return this.getToken(SimpleLangParser.SEPARATOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_sequence;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterSequence) {
             listener.enterSequence(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitSequence) {
             listener.exitSequence(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitSequence) {
            return visitor.visitSequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class IfStmtContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIfStmt) {
             listener.enterIfStmt(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIfStmt) {
             listener.exitIfStmt(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprStmtContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExprStmt) {
             listener.enterExprStmt(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExprStmt) {
             listener.exitExprStmt(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstDeclContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterConstDecl) {
             listener.enterConstDecl(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitConstDecl) {
             listener.exitConstDecl(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitConstDecl) {
            return visitor.visitConstDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhileStmtContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterWhileStmt) {
             listener.enterWhileStmt(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitWhileStmt) {
             listener.exitWhileStmt(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sequence(): SequenceContext {
        return this.getRuleContext(0, SequenceContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_block;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class NotContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterNot) {
             listener.enterNot(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitNot) {
             listener.exitNot(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitNot) {
            return visitor.visitNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class VariableContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterVariable) {
             listener.enterVariable(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitVariable) {
             listener.exitVariable(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulDivContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterMulDiv) {
             listener.enterMulDiv(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMulDiv) {
             listener.exitMulDiv(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMulDiv) {
            return visitor.visitMulDiv(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddSubContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAddSub) {
             listener.enterAddSub(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAddSub) {
             listener.exitAddSub(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAddSub) {
            return visitor.visitAddSub(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParensContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterParens) {
             listener.enterParens(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitParens) {
             listener.exitParens(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitParens) {
            return visitor.visitParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralsContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLiterals) {
             listener.enterLiterals(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLiterals) {
             listener.exitLiterals(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLiterals) {
            return visitor.visitLiterals(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLogical) {
             listener.enterLogical(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLogical) {
             listener.exitLogical(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLogical) {
            return visitor.visitLogical(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegateContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterNegate) {
             listener.enterNegate(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitNegate) {
             listener.exitNegate(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitNegate) {
            return visitor.visitNegate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LambdaContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public lambdaExpr(): LambdaExprContext {
        return this.getRuleContext(0, LambdaExprContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLambda) {
             listener.enterLambda(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLambda) {
             listener.exitLambda(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLambda) {
            return visitor.visitLambda(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_literal;
    }
    public override copyFrom(ctx: LiteralContext): void {
        super.copyFrom(ctx);
    }
}
export class BooleanContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.BOOLEAN, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBoolean) {
             listener.enterBoolean(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBoolean) {
             listener.exitBoolean(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntegerContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTEGER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.INTEGER, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterInteger) {
             listener.enterInteger(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitInteger) {
             listener.exitInteger(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public NAME(): antlr.TerminalNode[];
    public NAME(i: number): antlr.TerminalNode | null;
    public NAME(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SimpleLangParser.NAME);
    	} else {
    		return this.getToken(SimpleLangParser.NAME, i);
    	}
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_lambdaExpr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLambdaExpr) {
             listener.enterLambdaExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLambdaExpr) {
             listener.exitLambdaExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLambdaExpr) {
            return visitor.visitLambdaExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_type;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
