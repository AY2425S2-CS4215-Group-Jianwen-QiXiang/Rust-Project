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
    public static readonly INTEGER = 23;
    public static readonly NAME = 24;
    public static readonly BOOLEAN = 25;
    public static readonly SEPARATOR = 26;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'let'", "':'", "'='", "'if'", "'('", "')'", "'else'", 
        "'while'", "'return'", "'{'", "'}'", "'-'", "'!'", "'*'", "'/'", 
        "'+'", "'&&'", "'||'", "'=>'", "'int'", "'bool'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "INTEGER", "NAME", "BOOLEAN", "SEPARATOR"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "INTEGER", 
        "NAME", "BOOLEAN", "SEPARATOR",
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
        4,0,26,148,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,
        0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,
        6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
        9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,
        1,15,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,
        1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,4,22,122,8,22,11,22,
        12,22,123,1,23,4,23,127,8,23,11,23,12,23,128,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,3,24,140,8,24,1,25,4,25,143,8,25,11,25,
        12,25,144,1,25,1,25,0,0,26,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
        9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,
        20,41,21,43,22,45,23,47,24,49,25,51,26,1,0,3,1,0,48,57,2,0,65,90,
        97,122,3,0,9,10,13,13,32,32,151,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
        0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,
        0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
        0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,
        0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,
        0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,1,53,1,0,0,0,3,55,1,0,0,
        0,5,59,1,0,0,0,7,61,1,0,0,0,9,63,1,0,0,0,11,66,1,0,0,0,13,68,1,0,
        0,0,15,70,1,0,0,0,17,75,1,0,0,0,19,81,1,0,0,0,21,88,1,0,0,0,23,90,
        1,0,0,0,25,92,1,0,0,0,27,94,1,0,0,0,29,96,1,0,0,0,31,98,1,0,0,0,
        33,100,1,0,0,0,35,102,1,0,0,0,37,105,1,0,0,0,39,108,1,0,0,0,41,111,
        1,0,0,0,43,115,1,0,0,0,45,121,1,0,0,0,47,126,1,0,0,0,49,139,1,0,
        0,0,51,142,1,0,0,0,53,54,5,59,0,0,54,2,1,0,0,0,55,56,5,108,0,0,56,
        57,5,101,0,0,57,58,5,116,0,0,58,4,1,0,0,0,59,60,5,58,0,0,60,6,1,
        0,0,0,61,62,5,61,0,0,62,8,1,0,0,0,63,64,5,105,0,0,64,65,5,102,0,
        0,65,10,1,0,0,0,66,67,5,40,0,0,67,12,1,0,0,0,68,69,5,41,0,0,69,14,
        1,0,0,0,70,71,5,101,0,0,71,72,5,108,0,0,72,73,5,115,0,0,73,74,5,
        101,0,0,74,16,1,0,0,0,75,76,5,119,0,0,76,77,5,104,0,0,77,78,5,105,
        0,0,78,79,5,108,0,0,79,80,5,101,0,0,80,18,1,0,0,0,81,82,5,114,0,
        0,82,83,5,101,0,0,83,84,5,116,0,0,84,85,5,117,0,0,85,86,5,114,0,
        0,86,87,5,110,0,0,87,20,1,0,0,0,88,89,5,123,0,0,89,22,1,0,0,0,90,
        91,5,125,0,0,91,24,1,0,0,0,92,93,5,45,0,0,93,26,1,0,0,0,94,95,5,
        33,0,0,95,28,1,0,0,0,96,97,5,42,0,0,97,30,1,0,0,0,98,99,5,47,0,0,
        99,32,1,0,0,0,100,101,5,43,0,0,101,34,1,0,0,0,102,103,5,38,0,0,103,
        104,5,38,0,0,104,36,1,0,0,0,105,106,5,124,0,0,106,107,5,124,0,0,
        107,38,1,0,0,0,108,109,5,61,0,0,109,110,5,62,0,0,110,40,1,0,0,0,
        111,112,5,105,0,0,112,113,5,110,0,0,113,114,5,116,0,0,114,42,1,0,
        0,0,115,116,5,98,0,0,116,117,5,111,0,0,117,118,5,111,0,0,118,119,
        5,108,0,0,119,44,1,0,0,0,120,122,7,0,0,0,121,120,1,0,0,0,122,123,
        1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,46,1,0,0,0,125,127,7,
        1,0,0,126,125,1,0,0,0,127,128,1,0,0,0,128,126,1,0,0,0,128,129,1,
        0,0,0,129,48,1,0,0,0,130,131,5,116,0,0,131,132,5,114,0,0,132,133,
        5,117,0,0,133,140,5,101,0,0,134,135,5,102,0,0,135,136,5,97,0,0,136,
        137,5,108,0,0,137,138,5,115,0,0,138,140,5,101,0,0,139,130,1,0,0,
        0,139,134,1,0,0,0,140,50,1,0,0,0,141,143,7,2,0,0,142,141,1,0,0,0,
        143,144,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,
        146,147,6,25,0,0,147,52,1,0,0,0,5,0,123,128,139,144,1,6,0,0
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