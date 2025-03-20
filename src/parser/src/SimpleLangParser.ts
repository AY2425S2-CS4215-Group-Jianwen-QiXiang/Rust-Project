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
    public static readonly NUMBER = 21;
    public static readonly NAME = 22;
    public static readonly BOOLEAN = 23;
    public static readonly WS = 24;
    public static readonly RULE_prog = 0;
    public static readonly RULE_sequence = 1;
    public static readonly RULE_stmt = 2;
    public static readonly RULE_block = 3;
    public static readonly RULE_expr = 4;
    public static readonly RULE_lambdaExpr = 5;
    public static readonly RULE_type = 6;

    public static readonly literalNames = [
        null, "';'", "'let'", "'='", "'if'", "'('", "')'", "'else'", "'while'", 
        "'{'", "'}'", "'-'", "'!'", "'*'", "'/'", "'+'", "'&&'", "'||'", 
        "'=>'", "'int'", "'bool'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "NUMBER", 
        "NAME", "BOOLEAN", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "sequence", "stmt", "block", "expr", "lambdaExpr", "type",
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
            this.state = 14;
            this.sequence();
            this.state = 15;
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
            this.state = 19;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 19;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 17;
                    this.stmt();
                    }
                    break;
                case 2:
                    {
                    this.state = 18;
                    this.expr(0);
                    }
                    break;
                }
                }
                this.state = 21;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14948660) !== 0));
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
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 4, SimpleLangParser.RULE_stmt);
        try {
            this.state = 46;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__4:
            case SimpleLangParser.T__10:
            case SimpleLangParser.T__11:
            case SimpleLangParser.T__17:
            case SimpleLangParser.NUMBER:
            case SimpleLangParser.NAME:
            case SimpleLangParser.BOOLEAN:
                localContext = new ExprStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 23;
                this.expr(0);
                this.state = 24;
                this.match(SimpleLangParser.T__0);
                }
                break;
            case SimpleLangParser.T__1:
                localContext = new ConstDeclContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 26;
                this.match(SimpleLangParser.T__1);
                this.state = 27;
                this.type_();
                this.state = 28;
                this.match(SimpleLangParser.NAME);
                this.state = 29;
                this.match(SimpleLangParser.T__2);
                this.state = 30;
                this.expr(0);
                }
                break;
            case SimpleLangParser.T__3:
                localContext = new IfStmtContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 32;
                this.match(SimpleLangParser.T__3);
                this.state = 33;
                this.match(SimpleLangParser.T__4);
                this.state = 34;
                this.expr(0);
                this.state = 35;
                this.match(SimpleLangParser.T__5);
                this.state = 36;
                this.block();
                this.state = 37;
                this.match(SimpleLangParser.T__6);
                this.state = 38;
                this.block();
                }
                break;
            case SimpleLangParser.T__7:
                localContext = new WhileStmtContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 40;
                this.match(SimpleLangParser.T__7);
                this.state = 41;
                this.match(SimpleLangParser.T__4);
                this.state = 42;
                this.expr(0);
                this.state = 43;
                this.match(SimpleLangParser.T__5);
                this.state = 44;
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
            this.state = 48;
            this.match(SimpleLangParser.T__8);
            this.state = 49;
            this.sequence();
            this.state = 50;
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

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 8;
        this.enterRecursionRule(localContext, 8, SimpleLangParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 65;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                localContext = new NegateContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 53;
                this.match(SimpleLangParser.T__10);
                this.state = 54;
                this.expr(10);
                }
                break;
            case 2:
                {
                localContext = new NotContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 55;
                this.match(SimpleLangParser.T__11);
                this.state = 56;
                this.expr(9);
                }
                break;
            case 3:
                {
                localContext = new ParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 57;
                this.match(SimpleLangParser.T__4);
                this.state = 58;
                this.expr(0);
                this.state = 59;
                this.match(SimpleLangParser.T__5);
                }
                break;
            case 4:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 61;
                this.lambdaExpr();
                }
                break;
            case 5:
                {
                localContext = new BooleanContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 62;
                this.match(SimpleLangParser.BOOLEAN);
                }
                break;
            case 6:
                {
                localContext = new NumberContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 63;
                this.match(SimpleLangParser.NUMBER);
                }
                break;
            case 7:
                {
                localContext = new VariableContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 64;
                this.match(SimpleLangParser.NAME);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 78;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 76;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expr);
                        this.state = 67;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 68;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 13 || _la === 14)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 69;
                        this.expr(9);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expr);
                        this.state = 70;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 71;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 11 || _la === 15)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 72;
                        this.expr(8);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_expr);
                        this.state = 73;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 74;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 16 || _la === 17)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 75;
                        this.expr(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 80;
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
    public lambdaExpr(): LambdaExprContext {
        let localContext = new LambdaExprContext(this.context, this.state);
        this.enterRule(localContext, 10, SimpleLangParser.RULE_lambdaExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 84;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 22) {
                {
                {
                this.state = 81;
                this.match(SimpleLangParser.NAME);
                }
                }
                this.state = 86;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 87;
            this.match(SimpleLangParser.T__17);
            this.state = 88;
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
        this.enterRule(localContext, 12, SimpleLangParser.RULE_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 90;
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
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 8);
        case 1:
            return this.precpred(this.context, 7);
        case 2:
            return this.precpred(this.context, 6);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,24,93,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,1,0,1,0,1,0,1,1,1,1,4,1,20,8,1,11,1,12,1,21,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,3,2,47,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,4,1,4,1,4,1,4,3,4,66,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,5,4,77,8,4,10,4,12,4,80,9,4,1,5,5,5,83,8,5,10,5,12,5,86,9,
        5,1,5,1,5,1,5,1,6,1,6,1,6,0,1,8,7,0,2,4,6,8,10,12,0,4,1,0,13,14,
        2,0,11,11,15,15,1,0,16,17,1,0,19,20,100,0,14,1,0,0,0,2,19,1,0,0,
        0,4,46,1,0,0,0,6,48,1,0,0,0,8,65,1,0,0,0,10,84,1,0,0,0,12,90,1,0,
        0,0,14,15,3,2,1,0,15,16,5,0,0,1,16,1,1,0,0,0,17,20,3,4,2,0,18,20,
        3,8,4,0,19,17,1,0,0,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,
        21,22,1,0,0,0,22,3,1,0,0,0,23,24,3,8,4,0,24,25,5,1,0,0,25,47,1,0,
        0,0,26,27,5,2,0,0,27,28,3,12,6,0,28,29,5,22,0,0,29,30,5,3,0,0,30,
        31,3,8,4,0,31,47,1,0,0,0,32,33,5,4,0,0,33,34,5,5,0,0,34,35,3,8,4,
        0,35,36,5,6,0,0,36,37,3,6,3,0,37,38,5,7,0,0,38,39,3,6,3,0,39,47,
        1,0,0,0,40,41,5,8,0,0,41,42,5,5,0,0,42,43,3,8,4,0,43,44,5,6,0,0,
        44,45,3,6,3,0,45,47,1,0,0,0,46,23,1,0,0,0,46,26,1,0,0,0,46,32,1,
        0,0,0,46,40,1,0,0,0,47,5,1,0,0,0,48,49,5,9,0,0,49,50,3,2,1,0,50,
        51,5,10,0,0,51,7,1,0,0,0,52,53,6,4,-1,0,53,54,5,11,0,0,54,66,3,8,
        4,10,55,56,5,12,0,0,56,66,3,8,4,9,57,58,5,5,0,0,58,59,3,8,4,0,59,
        60,5,6,0,0,60,66,1,0,0,0,61,66,3,10,5,0,62,66,5,23,0,0,63,66,5,21,
        0,0,64,66,5,22,0,0,65,52,1,0,0,0,65,55,1,0,0,0,65,57,1,0,0,0,65,
        61,1,0,0,0,65,62,1,0,0,0,65,63,1,0,0,0,65,64,1,0,0,0,66,78,1,0,0,
        0,67,68,10,8,0,0,68,69,7,0,0,0,69,77,3,8,4,9,70,71,10,7,0,0,71,72,
        7,1,0,0,72,77,3,8,4,8,73,74,10,6,0,0,74,75,7,2,0,0,75,77,3,8,4,7,
        76,67,1,0,0,0,76,70,1,0,0,0,76,73,1,0,0,0,77,80,1,0,0,0,78,76,1,
        0,0,0,78,79,1,0,0,0,79,9,1,0,0,0,80,78,1,0,0,0,81,83,5,22,0,0,82,
        81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,
        0,86,84,1,0,0,0,87,88,5,18,0,0,88,89,3,6,3,0,89,11,1,0,0,0,90,91,
        7,3,0,0,91,13,1,0,0,0,7,19,21,46,65,76,78,84
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
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_stmt;
    }
    public override copyFrom(ctx: StmtContext): void {
        super.copyFrom(ctx);
    }
}
export class IfStmtContext extends StmtContext {
    public constructor(ctx: StmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class ExprStmtContext extends StmtContext {
    public constructor(ctx: StmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class ConstDeclContext extends StmtContext {
    public constructor(ctx: StmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NAME, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class WhileStmtContext extends StmtContext {
    public constructor(ctx: StmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expr;
    }
    public override copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx);
    }
}
export class NotContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class VariableContext extends ExprContext {
    public constructor(ctx: ExprContext) {
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
export class NumberContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NUMBER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.NUMBER, 0)!;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterNumber) {
             listener.enterNumber(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitNumber) {
             listener.exitNumber(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulDivContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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
export class AddSubContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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
export class ParensContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class LogicalContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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
export class NegateContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class BooleanContext extends ExprContext {
    public constructor(ctx: ExprContext) {
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
export class LambdaContext extends ExprContext {
    public constructor(ctx: ExprContext) {
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
