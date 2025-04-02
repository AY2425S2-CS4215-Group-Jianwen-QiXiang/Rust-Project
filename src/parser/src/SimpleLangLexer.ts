// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SimpleLangLexer extends antlr.Lexer {
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
    public static readonly INTEGER = 31;
    public static readonly BOOLEAN = 32;
    public static readonly NAME = 33;
    public static readonly SEPARATOR = 34;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'let'", "':'", "'='", "'mut'", "'if'", "'('", "')'", 
        "'else'", "'while'", "'return'", "'fn'", "'->'", "'{'", "'}'", "'-'", 
        "'!'", "'*'", "'/'", "'+'", "'&&'", "'||'", "'&'", "'&mut'", "'=>'", 
        "'int'", "'bool'", "'&int'", "'&bool'", "','"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "INTEGER", 
        "BOOLEAN", "NAME", "SEPARATOR"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "T__26", "T__27", "T__28", "T__29", "INTEGER", 
        "BOOLEAN", "NAME", "SEPARATOR",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SimpleLangLexer._ATN, SimpleLangLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SimpleLang.g4"; }

    public get literalNames(): (string | null)[] { return SimpleLangLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangLexer.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangLexer.ruleNames; }

    public get serializedATN(): number[] { return SimpleLangLexer._serializedATN; }

    public get channelNames(): string[] { return SimpleLangLexer.channelNames; }

    public get modeNames(): string[] { return SimpleLangLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,34,194,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,
        1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
        1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,
        12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,
        18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,23,1,
        23,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,
        26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,
        28,1,29,1,29,1,30,4,30,168,8,30,11,30,12,30,169,1,31,1,31,1,31,1,
        31,1,31,1,31,1,31,1,31,1,31,3,31,181,8,31,1,32,4,32,184,8,32,11,
        32,12,32,185,1,33,4,33,189,8,33,11,33,12,33,190,1,33,1,33,0,0,34,
        1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
        27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,
        49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,1,0,
        3,1,0,48,57,2,0,65,90,97,122,3,0,9,10,13,13,32,32,197,0,1,1,0,0,
        0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
        13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,
        23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,
        33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,
        43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,
        53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,
        63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,1,69,1,0,0,0,3,71,1,0,0,0,5,
        75,1,0,0,0,7,77,1,0,0,0,9,79,1,0,0,0,11,83,1,0,0,0,13,86,1,0,0,0,
        15,88,1,0,0,0,17,90,1,0,0,0,19,95,1,0,0,0,21,101,1,0,0,0,23,108,
        1,0,0,0,25,111,1,0,0,0,27,114,1,0,0,0,29,116,1,0,0,0,31,118,1,0,
        0,0,33,120,1,0,0,0,35,122,1,0,0,0,37,124,1,0,0,0,39,126,1,0,0,0,
        41,128,1,0,0,0,43,131,1,0,0,0,45,134,1,0,0,0,47,136,1,0,0,0,49,141,
        1,0,0,0,51,144,1,0,0,0,53,148,1,0,0,0,55,153,1,0,0,0,57,158,1,0,
        0,0,59,164,1,0,0,0,61,167,1,0,0,0,63,180,1,0,0,0,65,183,1,0,0,0,
        67,188,1,0,0,0,69,70,5,59,0,0,70,2,1,0,0,0,71,72,5,108,0,0,72,73,
        5,101,0,0,73,74,5,116,0,0,74,4,1,0,0,0,75,76,5,58,0,0,76,6,1,0,0,
        0,77,78,5,61,0,0,78,8,1,0,0,0,79,80,5,109,0,0,80,81,5,117,0,0,81,
        82,5,116,0,0,82,10,1,0,0,0,83,84,5,105,0,0,84,85,5,102,0,0,85,12,
        1,0,0,0,86,87,5,40,0,0,87,14,1,0,0,0,88,89,5,41,0,0,89,16,1,0,0,
        0,90,91,5,101,0,0,91,92,5,108,0,0,92,93,5,115,0,0,93,94,5,101,0,
        0,94,18,1,0,0,0,95,96,5,119,0,0,96,97,5,104,0,0,97,98,5,105,0,0,
        98,99,5,108,0,0,99,100,5,101,0,0,100,20,1,0,0,0,101,102,5,114,0,
        0,102,103,5,101,0,0,103,104,5,116,0,0,104,105,5,117,0,0,105,106,
        5,114,0,0,106,107,5,110,0,0,107,22,1,0,0,0,108,109,5,102,0,0,109,
        110,5,110,0,0,110,24,1,0,0,0,111,112,5,45,0,0,112,113,5,62,0,0,113,
        26,1,0,0,0,114,115,5,123,0,0,115,28,1,0,0,0,116,117,5,125,0,0,117,
        30,1,0,0,0,118,119,5,45,0,0,119,32,1,0,0,0,120,121,5,33,0,0,121,
        34,1,0,0,0,122,123,5,42,0,0,123,36,1,0,0,0,124,125,5,47,0,0,125,
        38,1,0,0,0,126,127,5,43,0,0,127,40,1,0,0,0,128,129,5,38,0,0,129,
        130,5,38,0,0,130,42,1,0,0,0,131,132,5,124,0,0,132,133,5,124,0,0,
        133,44,1,0,0,0,134,135,5,38,0,0,135,46,1,0,0,0,136,137,5,38,0,0,
        137,138,5,109,0,0,138,139,5,117,0,0,139,140,5,116,0,0,140,48,1,0,
        0,0,141,142,5,61,0,0,142,143,5,62,0,0,143,50,1,0,0,0,144,145,5,105,
        0,0,145,146,5,110,0,0,146,147,5,116,0,0,147,52,1,0,0,0,148,149,5,
        98,0,0,149,150,5,111,0,0,150,151,5,111,0,0,151,152,5,108,0,0,152,
        54,1,0,0,0,153,154,5,38,0,0,154,155,5,105,0,0,155,156,5,110,0,0,
        156,157,5,116,0,0,157,56,1,0,0,0,158,159,5,38,0,0,159,160,5,98,0,
        0,160,161,5,111,0,0,161,162,5,111,0,0,162,163,5,108,0,0,163,58,1,
        0,0,0,164,165,5,44,0,0,165,60,1,0,0,0,166,168,7,0,0,0,167,166,1,
        0,0,0,168,169,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,62,1,0,
        0,0,171,172,5,116,0,0,172,173,5,114,0,0,173,174,5,117,0,0,174,181,
        5,101,0,0,175,176,5,102,0,0,176,177,5,97,0,0,177,178,5,108,0,0,178,
        179,5,115,0,0,179,181,5,101,0,0,180,171,1,0,0,0,180,175,1,0,0,0,
        181,64,1,0,0,0,182,184,7,1,0,0,183,182,1,0,0,0,184,185,1,0,0,0,185,
        183,1,0,0,0,185,186,1,0,0,0,186,66,1,0,0,0,187,189,7,2,0,0,188,187,
        1,0,0,0,189,190,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,192,
        1,0,0,0,192,193,6,33,0,0,193,68,1,0,0,0,5,0,169,180,185,190,1,6,
        0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangLexer.__ATN) {
            SimpleLangLexer.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangLexer._serializedATN);
        }

        return SimpleLangLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangLexer.literalNames, SimpleLangLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}