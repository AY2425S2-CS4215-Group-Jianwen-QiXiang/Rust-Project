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
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly INTEGER = 26;
    public static readonly BOOLEAN = 27;
    public static readonly NAME = 28;
    public static readonly SEPARATOR = 29;
    public static readonly RULE_prog = 0;
    public static readonly RULE_sequence = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_block = 3;
    public static readonly RULE_expression = 4;
    public static readonly RULE_primary = 5;
    public static readonly RULE_literal = 6;
    public static readonly RULE_lambdaExpr = 7;
    public static readonly RULE_type = 8;

    public static readonly literalNames = [
        null, "';'", "'let'", "':'", "'='", "'if'", "'('", "')'", "'else'", 
        "'while'", "'return'", "'fn'", "'->'", "'{'", "'}'", "'-'", "'!'", 
        "'*'", "'/'", "'+'", "'&&'", "'||'", "'=>'", "'int'", "'bool'", 
        "','"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, "INTEGER", "BOOLEAN", "NAME", "SEPARATOR"
    ];
    public static readonly ruleNames = [
        "prog", "sequence", "statement", "block", "expression", "primary", 
        "literal", "lambdaExpr", "type",
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
            this.state = 18;
            this.sequence();
            this.state = 19;
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
            this.state = 22;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 21;
                this.statement();
                }
                }
                this.state = 24;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 474066532) !== 0));
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
        let _la: number;
        try {
            this.state = 73;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__14:
            case SimpleLangParser.T__15:
            case SimpleLangParser.T__21:
            case SimpleLangParser.INTEGER:
            case SimpleLangParser.BOOLEAN:
            case SimpleLangParser.NAME:
                localContext = new ExprStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 26;
                this.expression(0);
                this.state = 27;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case SimpleLangParser.T__1:
                localContext = new ConstDeclContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 29;
                this.match(SimpleLangParser.T__1);
                this.state = 30;
                this.type_();
                this.state = 31;
                this.match(SimpleLangParser.T__2);
                this.state = 32;
                this.match(SimpleLangParser.NAME);
                this.state = 33;
                this.match(SimpleLangParser.T__3);
                this.state = 34;
                this.expression(0);
                this.state = 35;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case SimpleLangParser.T__4:
                localContext = new IfStmtContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 37;
                this.match(SimpleLangParser.T__4);
                this.state = 38;
                this.match(SimpleLangParser.T__5);
                this.state = 39;
                this.expression(0);
                this.state = 40;
                this.match(SimpleLangParser.T__6);
                this.state = 41;
                this.block();
                this.state = 42;
                this.match(SimpleLangParser.T__7);
                this.state = 43;
                this.block();
                }
                break;
            case SimpleLangParser.T__8:
                localContext = new WhileStmtContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 45;
                this.match(SimpleLangParser.T__8);
                this.state = 46;
                this.match(SimpleLangParser.T__5);
                this.state = 47;
                this.expression(0);
                this.state = 48;
                this.match(SimpleLangParser.T__6);
                this.state = 49;
                this.block();
                }
                break;
            case SimpleLangParser.T__12:
                localContext = new BlockStmtContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 51;
                this.block();
                }
                break;
            case SimpleLangParser.T__9:
                localContext = new ReturnStmtContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 52;
                this.match(SimpleLangParser.T__9);
                this.state = 53;
                this.expression(0);
                this.state = 54;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case SimpleLangParser.T__10:
                localContext = new FunctionDeclContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 56;
                this.match(SimpleLangParser.T__10);
                this.state = 57;
                this.match(SimpleLangParser.NAME);
                this.state = 58;
                this.match(SimpleLangParser.T__5);
                this.state = 65;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25167872) !== 0)) {
                    {
                    {
                    this.state = 59;
                    this.type_();
                    this.state = 60;
                    this.match(SimpleLangParser.T__2);
                    this.state = 61;
                    this.match(SimpleLangParser.NAME);
                    }
                    }
                    this.state = 67;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 68;
                this.match(SimpleLangParser.T__6);
                this.state = 69;
                this.match(SimpleLangParser.T__11);
                this.state = 70;
                this.type_();
                this.state = 71;
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
            this.state = 75;
            this.match(SimpleLangParser.T__12);
            this.state = 76;
            this.sequence();
            this.state = 77;
            this.match(SimpleLangParser.T__13);
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
            this.state = 85;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__21:
            case SimpleLangParser.INTEGER:
            case SimpleLangParser.BOOLEAN:
            case SimpleLangParser.NAME:
                {
                localContext = new PrimaryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 80;
                this.primary();
                }
                break;
            case SimpleLangParser.T__14:
                {
                localContext = new NegateContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 81;
                this.match(SimpleLangParser.T__14);
                this.state = 82;
                this.expression(5);
                }
                break;
            case SimpleLangParser.T__15:
                {
                localContext = new NotContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 83;
                this.match(SimpleLangParser.T__15);
                this.state = 84;
                this.expression(4);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 98;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 96;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 87;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 88;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 17 || _la === 18)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 89;
                        this.expression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 90;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 91;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 15 || _la === 19)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 92;
                        this.expression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 93;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 94;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 20 || _la === 21)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 95;
                        this.expression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 100;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
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
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 10, SimpleLangParser.RULE_primary);
        let _la: number;
        try {
            this.state = 117;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                localContext = new FunctionAppContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 101;
                this.match(SimpleLangParser.NAME);
                this.state = 102;
                this.match(SimpleLangParser.T__5);
                this.state = 106;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 474054720) !== 0)) {
                    {
                    {
                    this.state = 103;
                    this.expression(0);
                    }
                    }
                    this.state = 108;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 109;
                this.match(SimpleLangParser.T__6);
                }
                break;
            case 2:
                localContext = new ParensContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 110;
                this.match(SimpleLangParser.T__5);
                this.state = 111;
                this.expression(0);
                this.state = 112;
                this.match(SimpleLangParser.T__6);
                }
                break;
            case 3:
                localContext = new LambdaContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 114;
                this.lambdaExpr();
                }
                break;
            case 4:
                localContext = new LiteralsContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 115;
                this.literal();
                }
                break;
            case 5:
                localContext = new VariableContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 116;
                this.match(SimpleLangParser.NAME);
                }
                break;
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
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 12, SimpleLangParser.RULE_literal);
        try {
            this.state = 121;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.INTEGER:
                localContext = new IntegerContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 119;
                this.match(SimpleLangParser.INTEGER);
                }
                break;
            case SimpleLangParser.BOOLEAN:
                localContext = new BooleanContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 120;
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
        this.enterRule(localContext, 14, SimpleLangParser.RULE_lambdaExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 28) {
                {
                {
                this.state = 123;
                this.match(SimpleLangParser.NAME);
                }
                }
                this.state = 128;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 129;
            this.match(SimpleLangParser.T__21);
            this.state = 130;
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
        this.enterRule(localContext, 16, SimpleLangParser.RULE_type);
        let _la: number;
        try {
            this.state = 149;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                localContext = new IntTypeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 132;
                this.match(SimpleLangParser.T__22);
                }
                break;
            case SimpleLangParser.T__23:
                localContext = new BoolTypeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 133;
                this.match(SimpleLangParser.T__23);
                }
                break;
            case SimpleLangParser.T__10:
                localContext = new FunctionTypeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 134;
                this.match(SimpleLangParser.T__10);
                this.state = 135;
                this.match(SimpleLangParser.T__5);
                this.state = 144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25167872) !== 0)) {
                    {
                    this.state = 136;
                    this.type_();
                    this.state = 141;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 25) {
                        {
                        {
                        this.state = 137;
                        this.match(SimpleLangParser.T__24);
                        this.state = 138;
                        this.type_();
                        }
                        }
                        this.state = 143;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 146;
                this.match(SimpleLangParser.T__6);
                this.state = 147;
                this.match(SimpleLangParser.T__11);
                this.state = 148;
                this.type_();
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
            return this.precpred(this.context, 3);
        case 1:
            return this.precpred(this.context, 2);
        case 2:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,29,152,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,4,1,23,8,1,11,1,12,1,24,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,5,2,64,8,2,10,2,12,2,67,9,2,1,2,1,2,1,2,1,2,1,2,3,
        2,74,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,86,8,4,1,4,
        1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,97,8,4,10,4,12,4,100,9,4,1,5,
        1,5,1,5,5,5,105,8,5,10,5,12,5,108,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
        5,1,5,3,5,118,8,5,1,6,1,6,3,6,122,8,6,1,7,5,7,125,8,7,10,7,12,7,
        128,9,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,140,8,8,10,8,
        12,8,143,9,8,3,8,145,8,8,1,8,1,8,1,8,3,8,150,8,8,1,8,0,1,8,9,0,2,
        4,6,8,10,12,14,16,0,3,1,0,17,18,2,0,15,15,19,19,1,0,20,21,166,0,
        18,1,0,0,0,2,22,1,0,0,0,4,73,1,0,0,0,6,75,1,0,0,0,8,85,1,0,0,0,10,
        117,1,0,0,0,12,121,1,0,0,0,14,126,1,0,0,0,16,149,1,0,0,0,18,19,3,
        2,1,0,19,20,5,0,0,1,20,1,1,0,0,0,21,23,3,4,2,0,22,21,1,0,0,0,23,
        24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,0,26,27,3,8,4,
        0,27,28,5,1,0,0,28,74,1,0,0,0,29,30,5,2,0,0,30,31,3,16,8,0,31,32,
        5,3,0,0,32,33,5,28,0,0,33,34,5,4,0,0,34,35,3,8,4,0,35,36,5,1,0,0,
        36,74,1,0,0,0,37,38,5,5,0,0,38,39,5,6,0,0,39,40,3,8,4,0,40,41,5,
        7,0,0,41,42,3,6,3,0,42,43,5,8,0,0,43,44,3,6,3,0,44,74,1,0,0,0,45,
        46,5,9,0,0,46,47,5,6,0,0,47,48,3,8,4,0,48,49,5,7,0,0,49,50,3,6,3,
        0,50,74,1,0,0,0,51,74,3,6,3,0,52,53,5,10,0,0,53,54,3,8,4,0,54,55,
        5,1,0,0,55,74,1,0,0,0,56,57,5,11,0,0,57,58,5,28,0,0,58,65,5,6,0,
        0,59,60,3,16,8,0,60,61,5,3,0,0,61,62,5,28,0,0,62,64,1,0,0,0,63,59,
        1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,
        67,65,1,0,0,0,68,69,5,7,0,0,69,70,5,12,0,0,70,71,3,16,8,0,71,72,
        3,6,3,0,72,74,1,0,0,0,73,26,1,0,0,0,73,29,1,0,0,0,73,37,1,0,0,0,
        73,45,1,0,0,0,73,51,1,0,0,0,73,52,1,0,0,0,73,56,1,0,0,0,74,5,1,0,
        0,0,75,76,5,13,0,0,76,77,3,2,1,0,77,78,5,14,0,0,78,7,1,0,0,0,79,
        80,6,4,-1,0,80,86,3,10,5,0,81,82,5,15,0,0,82,86,3,8,4,5,83,84,5,
        16,0,0,84,86,3,8,4,4,85,79,1,0,0,0,85,81,1,0,0,0,85,83,1,0,0,0,86,
        98,1,0,0,0,87,88,10,3,0,0,88,89,7,0,0,0,89,97,3,8,4,4,90,91,10,2,
        0,0,91,92,7,1,0,0,92,97,3,8,4,3,93,94,10,1,0,0,94,95,7,2,0,0,95,
        97,3,8,4,2,96,87,1,0,0,0,96,90,1,0,0,0,96,93,1,0,0,0,97,100,1,0,
        0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,9,1,0,0,0,100,98,1,0,0,0,101,
        102,5,28,0,0,102,106,5,6,0,0,103,105,3,8,4,0,104,103,1,0,0,0,105,
        108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,109,1,0,0,0,108,
        106,1,0,0,0,109,118,5,7,0,0,110,111,5,6,0,0,111,112,3,8,4,0,112,
        113,5,7,0,0,113,118,1,0,0,0,114,118,3,14,7,0,115,118,3,12,6,0,116,
        118,5,28,0,0,117,101,1,0,0,0,117,110,1,0,0,0,117,114,1,0,0,0,117,
        115,1,0,0,0,117,116,1,0,0,0,118,11,1,0,0,0,119,122,5,26,0,0,120,
        122,5,27,0,0,121,119,1,0,0,0,121,120,1,0,0,0,122,13,1,0,0,0,123,
        125,5,28,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,
        127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,130,5,22,0,0,130,
        131,3,6,3,0,131,15,1,0,0,0,132,150,5,23,0,0,133,150,5,24,0,0,134,
        135,5,11,0,0,135,144,5,6,0,0,136,141,3,16,8,0,137,138,5,25,0,0,138,
        140,3,16,8,0,139,137,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,
        142,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,144,136,1,0,0,0,144,
        145,1,0,0,0,145,146,1,0,0,0,146,147,5,7,0,0,147,148,5,12,0,0,148,
        150,3,16,8,0,149,132,1,0,0,0,149,133,1,0,0,0,149,134,1,0,0,0,150,
        17,1,0,0,0,13,24,65,73,85,96,98,106,117,121,126,141,144,149
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
export class BlockStmtContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBlockStmt) {
             listener.enterBlockStmt(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBlockStmt) {
             listener.exitBlockStmt(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBlockStmt) {
            return visitor.visitBlockStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReturnStmtContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterReturnStmt) {
             listener.enterReturnStmt(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitReturnStmt) {
             listener.exitReturnStmt(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionDeclContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
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
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionDecl) {
             listener.enterFunctionDecl(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionDecl) {
             listener.exitFunctionDecl(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
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
export class PrimaryExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primary(): PrimaryContext {
        return this.getRuleContext(0, PrimaryContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPrimaryExpr) {
             listener.enterPrimaryExpr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPrimaryExpr) {
             listener.exitPrimaryExpr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
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


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primary;
    }
    public override copyFrom(ctx: PrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class VariableContext extends PrimaryContext {
    public constructor(ctx: PrimaryContext) {
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
export class ParensContext extends PrimaryContext {
    public constructor(ctx: PrimaryContext) {
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
export class LiteralsContext extends PrimaryContext {
    public constructor(ctx: PrimaryContext) {
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
export class FunctionAppContext extends PrimaryContext {
    public constructor(ctx: PrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
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
        if(listener.enterFunctionApp) {
             listener.enterFunctionApp(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionApp) {
             listener.exitFunctionApp(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionApp) {
            return visitor.visitFunctionApp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LambdaContext extends PrimaryContext {
    public constructor(ctx: PrimaryContext) {
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
    public override copyFrom(ctx: TypeContext): void {
        super.copyFrom(ctx);
    }
}
export class BoolTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBoolType) {
             listener.enterBoolType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBoolType) {
             listener.exitBoolType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBoolType) {
            return visitor.visitBoolType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionType) {
             listener.enterFunctionType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionType) {
             listener.exitFunctionType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIntType) {
             listener.enterIntType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIntType) {
             listener.exitIntType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIntType) {
            return visitor.visitIntType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
