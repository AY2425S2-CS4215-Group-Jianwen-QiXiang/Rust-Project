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
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly INTEGER = 42;
    public static readonly BOOLEAN = 43;
    public static readonly NAME = 44;
    public static readonly STRING = 45;
    public static readonly SEPARATOR = 46;
    public static readonly RULE_prog = 0;
    public static readonly RULE_sequence = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_block = 3;
    public static readonly RULE_expression = 4;
    public static readonly RULE_literal = 5;
    public static readonly RULE_lambdaExpr = 6;
    public static readonly RULE_type = 7;

    public static readonly literalNames = [
        null, "';'", "'let'", "':'", "'='", "'mut'", "'*'", "'if'", "'('", 
        "')'", "'else'", "'while'", "'return'", "'fn'", "'->'", "'{'", "'}'", 
        "'&'", "'-'", "'!'", "'/'", "'+'", "'&&'", "'||'", "'<'", "'<='", 
        "'>'", "'>='", "'=='", "'!='", "'undefined'", "'=>'", "'int'", "'bool'", 
        "'*int'", "'*bool'", "'*mut int'", "'*mut bool'", "'string'", "'*string'", 
        "'*mut string'", "','"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "INTEGER", 
        "BOOLEAN", "NAME", "STRING", "SEPARATOR"
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
            this.state = 20;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 19;
                this.statement();
                }
                }
                this.state = 22;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3222190532) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 15) !== 0));
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
            this.state = 91;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                localContext = new ExprStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 24;
                this.expression(0);
                this.state = 25;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 2:
                localContext = new ConstDeclContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 27;
                this.match(SimpleLangParser.T__1);
                this.state = 28;
                this.type_();
                this.state = 29;
                this.match(SimpleLangParser.T__2);
                this.state = 30;
                this.match(SimpleLangParser.NAME);
                this.state = 31;
                this.match(SimpleLangParser.T__3);
                this.state = 32;
                this.expression(0);
                this.state = 33;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 3:
                localContext = new MutConstDeclContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 35;
                this.match(SimpleLangParser.T__1);
                this.state = 36;
                this.match(SimpleLangParser.T__4);
                this.state = 37;
                this.type_();
                this.state = 38;
                this.match(SimpleLangParser.T__2);
                this.state = 39;
                this.match(SimpleLangParser.NAME);
                this.state = 40;
                this.match(SimpleLangParser.T__3);
                this.state = 41;
                this.expression(0);
                this.state = 42;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 4:
                localContext = new AssignmentContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 44;
                this.match(SimpleLangParser.NAME);
                this.state = 45;
                this.match(SimpleLangParser.T__3);
                this.state = 46;
                this.expression(0);
                this.state = 47;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 5:
                localContext = new PtrAssignmentContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 49;
                this.match(SimpleLangParser.T__5);
                this.state = 50;
                this.match(SimpleLangParser.NAME);
                this.state = 51;
                this.match(SimpleLangParser.T__3);
                this.state = 52;
                this.expression(0);
                this.state = 53;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 6:
                localContext = new IfStmtContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 55;
                this.match(SimpleLangParser.T__6);
                this.state = 56;
                this.match(SimpleLangParser.T__7);
                this.state = 57;
                this.expression(0);
                this.state = 58;
                this.match(SimpleLangParser.T__8);
                this.state = 59;
                this.block();
                this.state = 60;
                this.match(SimpleLangParser.T__9);
                this.state = 61;
                this.block();
                }
                break;
            case 7:
                localContext = new WhileStmtContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 63;
                this.match(SimpleLangParser.T__10);
                this.state = 64;
                this.match(SimpleLangParser.T__7);
                this.state = 65;
                this.expression(0);
                this.state = 66;
                this.match(SimpleLangParser.T__8);
                this.state = 67;
                this.block();
                }
                break;
            case 8:
                localContext = new BlockStmtContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 69;
                this.block();
                }
                break;
            case 9:
                localContext = new ReturnStmtContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 70;
                this.match(SimpleLangParser.T__11);
                this.state = 71;
                this.expression(0);
                this.state = 72;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case 10:
                localContext = new FunctionDeclContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 74;
                this.match(SimpleLangParser.T__12);
                this.state = 75;
                this.match(SimpleLangParser.NAME);
                this.state = 76;
                this.match(SimpleLangParser.T__7);
                this.state = 83;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & 268042241) !== 0)) {
                    {
                    {
                    this.state = 77;
                    this.type_();
                    this.state = 78;
                    this.match(SimpleLangParser.T__2);
                    this.state = 79;
                    this.match(SimpleLangParser.NAME);
                    }
                    }
                    this.state = 85;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 86;
                this.match(SimpleLangParser.T__8);
                this.state = 87;
                this.match(SimpleLangParser.T__13);
                this.state = 88;
                this.type_();
                this.state = 89;
                this.block();
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
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 6, SimpleLangParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 93;
            this.match(SimpleLangParser.T__14);
            this.state = 94;
            this.sequence();
            this.state = 95;
            this.match(SimpleLangParser.T__15);
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
            this.state = 126;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                {
                localContext = new VariableContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 98;
                this.match(SimpleLangParser.NAME);
                }
                break;
            case 2:
                {
                localContext = new LiteralsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 99;
                this.literal();
                }
                break;
            case 3:
                {
                localContext = new StringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 100;
                this.match(SimpleLangParser.STRING);
                }
                break;
            case 4:
                {
                localContext = new ParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 101;
                this.match(SimpleLangParser.T__7);
                this.state = 102;
                this.expression(0);
                this.state = 103;
                this.match(SimpleLangParser.T__8);
                }
                break;
            case 5:
                {
                localContext = new FunctionAppContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 105;
                this.match(SimpleLangParser.NAME);
                this.state = 106;
                this.match(SimpleLangParser.T__7);
                this.state = 110;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3222143296) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 15) !== 0)) {
                    {
                    {
                    this.state = 107;
                    this.expression(0);
                    }
                    }
                    this.state = 112;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 113;
                this.match(SimpleLangParser.T__8);
                }
                break;
            case 6:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 114;
                this.lambdaExpr();
                }
                break;
            case 7:
                {
                localContext = new BorrowContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 115;
                this.match(SimpleLangParser.T__16);
                this.state = 116;
                this.match(SimpleLangParser.NAME);
                }
                break;
            case 8:
                {
                localContext = new MutBorrowContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 117;
                this.match(SimpleLangParser.T__16);
                this.state = 118;
                this.match(SimpleLangParser.T__4);
                this.state = 119;
                this.match(SimpleLangParser.NAME);
                }
                break;
            case 9:
                {
                localContext = new DereferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 120;
                this.match(SimpleLangParser.T__5);
                this.state = 121;
                this.match(SimpleLangParser.NAME);
                }
                break;
            case 10:
                {
                localContext = new NegateContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 122;
                this.match(SimpleLangParser.T__17);
                this.state = 123;
                this.expression(7);
                }
                break;
            case 11:
                {
                localContext = new NotContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 124;
                this.match(SimpleLangParser.T__18);
                this.state = 125;
                this.expression(6);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 145;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 143;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 128;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 129;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 6 || _la === 20)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 130;
                        this.expression(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 131;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 132;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 18 || _la === 21)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 133;
                        this.expression(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 134;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 135;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 22 || _la === 23)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 136;
                        this.expression(4);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ComparisonContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 137;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 138;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 251658240) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 139;
                        this.expression(3);
                        }
                        break;
                    case 5:
                        {
                        localContext = new EqualityContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expression);
                        this.state = 140;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 141;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 28 || _la === 29)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 142;
                        this.expression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 147;
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
            this.state = 151;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.INTEGER:
                localContext = new IntegerContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 148;
                this.match(SimpleLangParser.INTEGER);
                }
                break;
            case SimpleLangParser.BOOLEAN:
                localContext = new BooleanContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 149;
                this.match(SimpleLangParser.BOOLEAN);
                }
                break;
            case SimpleLangParser.T__29:
                localContext = new UndefinedContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 150;
                this.match(SimpleLangParser.T__29);
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
            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 44) {
                {
                {
                this.state = 153;
                this.match(SimpleLangParser.NAME);
                }
                }
                this.state = 158;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 159;
            this.match(SimpleLangParser.T__30);
            this.state = 160;
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
            this.state = 187;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__31:
                localContext = new IntTypeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 162;
                this.match(SimpleLangParser.T__31);
                }
                break;
            case SimpleLangParser.T__32:
                localContext = new BoolTypeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 163;
                this.match(SimpleLangParser.T__32);
                }
                break;
            case SimpleLangParser.T__33:
                localContext = new IntPointerTypeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 164;
                this.match(SimpleLangParser.T__33);
                }
                break;
            case SimpleLangParser.T__34:
                localContext = new BoolPointerTypeContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 165;
                this.match(SimpleLangParser.T__34);
                }
                break;
            case SimpleLangParser.T__35:
                localContext = new IntMutPointerTypeContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 166;
                this.match(SimpleLangParser.T__35);
                }
                break;
            case SimpleLangParser.T__36:
                localContext = new BoolMutPointerTypeContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 167;
                this.match(SimpleLangParser.T__36);
                }
                break;
            case SimpleLangParser.T__37:
                localContext = new StringTypeContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 168;
                this.match(SimpleLangParser.T__37);
                }
                break;
            case SimpleLangParser.T__38:
                localContext = new StringPointerTypeContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 169;
                this.match(SimpleLangParser.T__38);
                }
                break;
            case SimpleLangParser.T__39:
                localContext = new StringMutPointerTypeContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 170;
                this.match(SimpleLangParser.T__39);
                }
                break;
            case SimpleLangParser.T__12:
                localContext = new FunctionTypeContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 171;
                this.match(SimpleLangParser.T__12);
                this.state = 172;
                this.match(SimpleLangParser.T__7);
                this.state = 181;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & 268042241) !== 0)) {
                    {
                    this.state = 173;
                    this.type_();
                    this.state = 178;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 174;
                        this.match(SimpleLangParser.T__40);
                        this.state = 175;
                        this.type_();
                        }
                        }
                        this.state = 180;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 183;
                this.match(SimpleLangParser.T__8);
                this.state = 184;
                this.match(SimpleLangParser.T__13);
                this.state = 185;
                this.type_();
                }
                break;
            case SimpleLangParser.T__29:
                localContext = new UndefinedTypeContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 186;
                this.match(SimpleLangParser.T__29);
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
            return this.precpred(this.context, 5);
        case 1:
            return this.precpred(this.context, 4);
        case 2:
            return this.precpred(this.context, 3);
        case 3:
            return this.precpred(this.context, 2);
        case 4:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,46,190,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,1,0,1,0,1,0,1,1,4,1,21,8,1,11,1,12,1,22,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,5,2,82,8,2,10,2,12,2,85,9,2,1,2,1,2,1,2,1,
        2,1,2,3,2,92,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,4,5,4,109,8,4,10,4,12,4,112,9,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,127,8,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,144,8,4,10,4,12,4,147,
        9,4,1,5,1,5,1,5,3,5,152,8,5,1,6,5,6,155,8,6,10,6,12,6,158,9,6,1,
        6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
        7,5,7,177,8,7,10,7,12,7,180,9,7,3,7,182,8,7,1,7,1,7,1,7,1,7,3,7,
        188,8,7,1,7,0,1,8,8,0,2,4,6,8,10,12,14,0,5,2,0,6,6,20,20,2,0,18,
        18,21,21,1,0,22,23,1,0,24,27,1,0,28,29,223,0,16,1,0,0,0,2,20,1,0,
        0,0,4,91,1,0,0,0,6,93,1,0,0,0,8,126,1,0,0,0,10,151,1,0,0,0,12,156,
        1,0,0,0,14,187,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,0,
        19,21,3,4,2,0,20,19,1,0,0,0,21,22,1,0,0,0,22,20,1,0,0,0,22,23,1,
        0,0,0,23,3,1,0,0,0,24,25,3,8,4,0,25,26,5,1,0,0,26,92,1,0,0,0,27,
        28,5,2,0,0,28,29,3,14,7,0,29,30,5,3,0,0,30,31,5,44,0,0,31,32,5,4,
        0,0,32,33,3,8,4,0,33,34,5,1,0,0,34,92,1,0,0,0,35,36,5,2,0,0,36,37,
        5,5,0,0,37,38,3,14,7,0,38,39,5,3,0,0,39,40,5,44,0,0,40,41,5,4,0,
        0,41,42,3,8,4,0,42,43,5,1,0,0,43,92,1,0,0,0,44,45,5,44,0,0,45,46,
        5,4,0,0,46,47,3,8,4,0,47,48,5,1,0,0,48,92,1,0,0,0,49,50,5,6,0,0,
        50,51,5,44,0,0,51,52,5,4,0,0,52,53,3,8,4,0,53,54,5,1,0,0,54,92,1,
        0,0,0,55,56,5,7,0,0,56,57,5,8,0,0,57,58,3,8,4,0,58,59,5,9,0,0,59,
        60,3,6,3,0,60,61,5,10,0,0,61,62,3,6,3,0,62,92,1,0,0,0,63,64,5,11,
        0,0,64,65,5,8,0,0,65,66,3,8,4,0,66,67,5,9,0,0,67,68,3,6,3,0,68,92,
        1,0,0,0,69,92,3,6,3,0,70,71,5,12,0,0,71,72,3,8,4,0,72,73,5,1,0,0,
        73,92,1,0,0,0,74,75,5,13,0,0,75,76,5,44,0,0,76,83,5,8,0,0,77,78,
        3,14,7,0,78,79,5,3,0,0,79,80,5,44,0,0,80,82,1,0,0,0,81,77,1,0,0,
        0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,
        1,0,0,0,86,87,5,9,0,0,87,88,5,14,0,0,88,89,3,14,7,0,89,90,3,6,3,
        0,90,92,1,0,0,0,91,24,1,0,0,0,91,27,1,0,0,0,91,35,1,0,0,0,91,44,
        1,0,0,0,91,49,1,0,0,0,91,55,1,0,0,0,91,63,1,0,0,0,91,69,1,0,0,0,
        91,70,1,0,0,0,91,74,1,0,0,0,92,5,1,0,0,0,93,94,5,15,0,0,94,95,3,
        2,1,0,95,96,5,16,0,0,96,7,1,0,0,0,97,98,6,4,-1,0,98,127,5,44,0,0,
        99,127,3,10,5,0,100,127,5,45,0,0,101,102,5,8,0,0,102,103,3,8,4,0,
        103,104,5,9,0,0,104,127,1,0,0,0,105,106,5,44,0,0,106,110,5,8,0,0,
        107,109,3,8,4,0,108,107,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,
        110,111,1,0,0,0,111,113,1,0,0,0,112,110,1,0,0,0,113,127,5,9,0,0,
        114,127,3,12,6,0,115,116,5,17,0,0,116,127,5,44,0,0,117,118,5,17,
        0,0,118,119,5,5,0,0,119,127,5,44,0,0,120,121,5,6,0,0,121,127,5,44,
        0,0,122,123,5,18,0,0,123,127,3,8,4,7,124,125,5,19,0,0,125,127,3,
        8,4,6,126,97,1,0,0,0,126,99,1,0,0,0,126,100,1,0,0,0,126,101,1,0,
        0,0,126,105,1,0,0,0,126,114,1,0,0,0,126,115,1,0,0,0,126,117,1,0,
        0,0,126,120,1,0,0,0,126,122,1,0,0,0,126,124,1,0,0,0,127,145,1,0,
        0,0,128,129,10,5,0,0,129,130,7,0,0,0,130,144,3,8,4,6,131,132,10,
        4,0,0,132,133,7,1,0,0,133,144,3,8,4,5,134,135,10,3,0,0,135,136,7,
        2,0,0,136,144,3,8,4,4,137,138,10,2,0,0,138,139,7,3,0,0,139,144,3,
        8,4,3,140,141,10,1,0,0,141,142,7,4,0,0,142,144,3,8,4,2,143,128,1,
        0,0,0,143,131,1,0,0,0,143,134,1,0,0,0,143,137,1,0,0,0,143,140,1,
        0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,9,1,0,
        0,0,147,145,1,0,0,0,148,152,5,42,0,0,149,152,5,43,0,0,150,152,5,
        30,0,0,151,148,1,0,0,0,151,149,1,0,0,0,151,150,1,0,0,0,152,11,1,
        0,0,0,153,155,5,44,0,0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,1,
        0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,5,
        31,0,0,160,161,3,6,3,0,161,13,1,0,0,0,162,188,5,32,0,0,163,188,5,
        33,0,0,164,188,5,34,0,0,165,188,5,35,0,0,166,188,5,36,0,0,167,188,
        5,37,0,0,168,188,5,38,0,0,169,188,5,39,0,0,170,188,5,40,0,0,171,
        172,5,13,0,0,172,181,5,8,0,0,173,178,3,14,7,0,174,175,5,41,0,0,175,
        177,3,14,7,0,176,174,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,
        179,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,181,173,1,0,0,0,181,
        182,1,0,0,0,182,183,1,0,0,0,183,184,5,9,0,0,184,185,5,14,0,0,185,
        188,3,14,7,0,186,188,5,30,0,0,187,162,1,0,0,0,187,163,1,0,0,0,187,
        164,1,0,0,0,187,165,1,0,0,0,187,166,1,0,0,0,187,167,1,0,0,0,187,
        168,1,0,0,0,187,169,1,0,0,0,187,170,1,0,0,0,187,171,1,0,0,0,187,
        186,1,0,0,0,188,15,1,0,0,0,12,22,83,91,110,126,143,145,151,156,178,
        181,187
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
export class AssignmentContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAssignment) {
             listener.enterAssignment(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAssignment) {
             listener.exitAssignment(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
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
export class MutConstDeclContext extends StatementContext {
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
        if(listener.enterMutConstDecl) {
             listener.enterMutConstDecl(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMutConstDecl) {
             listener.exitMutConstDecl(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMutConstDecl) {
            return visitor.visitMutConstDecl(this);
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
export class PtrAssignmentContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPtrAssignment) {
             listener.enterPtrAssignment(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPtrAssignment) {
             listener.exitPtrAssignment(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPtrAssignment) {
            return visitor.visitPtrAssignment(this);
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
export class MutBorrowContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterMutBorrow) {
             listener.enterMutBorrow(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMutBorrow) {
             listener.exitMutBorrow(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMutBorrow) {
            return visitor.visitMutBorrow(this);
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
export class BorrowContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBorrow) {
             listener.enterBorrow(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBorrow) {
             listener.exitBorrow(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBorrow) {
            return visitor.visitBorrow(this);
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
export class StringContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.STRING, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterString) {
             listener.enterString(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitString) {
             listener.exitString(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionAppContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
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
export class ComparisonContext extends ExpressionContext {
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
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
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
export class EqualityContext extends ExpressionContext {
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
        if(listener.enterEquality) {
             listener.enterEquality(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitEquality) {
             listener.exitEquality(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitEquality) {
            return visitor.visitEquality(this);
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
export class DereferenceContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
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
export class UndefinedContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterUndefined) {
             listener.enterUndefined(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitUndefined) {
             listener.exitUndefined(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitUndefined) {
            return visitor.visitUndefined(this);
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
export class BoolMutPointerTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBoolMutPointerType) {
             listener.enterBoolMutPointerType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBoolMutPointerType) {
             listener.exitBoolMutPointerType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBoolMutPointerType) {
            return visitor.visitBoolMutPointerType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringMutPointerTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterStringMutPointerType) {
             listener.enterStringMutPointerType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitStringMutPointerType) {
             listener.exitStringMutPointerType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitStringMutPointerType) {
            return visitor.visitStringMutPointerType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterStringType) {
             listener.enterStringType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitStringType) {
             listener.exitStringType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitStringType) {
            return visitor.visitStringType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BoolPointerTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBoolPointerType) {
             listener.enterBoolPointerType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBoolPointerType) {
             listener.exitBoolPointerType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBoolPointerType) {
            return visitor.visitBoolPointerType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntMutPointerTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIntMutPointerType) {
             listener.enterIntMutPointerType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIntMutPointerType) {
             listener.exitIntMutPointerType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIntMutPointerType) {
            return visitor.visitIntMutPointerType(this);
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
export class StringPointerTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterStringPointerType) {
             listener.enterStringPointerType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitStringPointerType) {
             listener.exitStringPointerType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitStringPointerType) {
            return visitor.visitStringPointerType(this);
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
export class IntPointerTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIntPointerType) {
             listener.enterIntPointerType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIntPointerType) {
             listener.exitIntPointerType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIntPointerType) {
            return visitor.visitIntPointerType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UndefinedTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterUndefinedType) {
             listener.enterUndefinedType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitUndefinedType) {
             listener.exitUndefinedType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitUndefinedType) {
            return visitor.visitUndefinedType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
