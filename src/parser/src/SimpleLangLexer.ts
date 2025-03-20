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
    public static readonly INTEGER = 21;
    public static readonly NAME = 22;
    public static readonly BOOLEAN = 23;
    public static readonly SEPARATOR = 24;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

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

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "INTEGER", "NAME", "BOOLEAN", 
        "SEPARATOR",
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
        4,0,24,133,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,1,1,1,1,1,1,
        1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,
        7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,
        1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,
        1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,4,20,109,8,20,
        11,20,12,20,110,1,21,4,21,114,8,21,11,21,12,21,115,1,22,1,22,1,22,
        1,22,1,22,1,22,1,22,1,22,1,22,3,22,127,8,22,1,23,4,23,130,8,23,11,
        23,12,23,131,0,0,24,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
        21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,
        43,22,45,23,47,24,1,0,3,1,0,48,57,2,0,65,90,97,122,3,0,9,10,13,13,
        32,32,136,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
        0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,
        0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
        0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
        0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,1,49,1,
        0,0,0,3,51,1,0,0,0,5,55,1,0,0,0,7,57,1,0,0,0,9,60,1,0,0,0,11,62,
        1,0,0,0,13,64,1,0,0,0,15,69,1,0,0,0,17,75,1,0,0,0,19,77,1,0,0,0,
        21,79,1,0,0,0,23,81,1,0,0,0,25,83,1,0,0,0,27,85,1,0,0,0,29,87,1,
        0,0,0,31,89,1,0,0,0,33,92,1,0,0,0,35,95,1,0,0,0,37,98,1,0,0,0,39,
        102,1,0,0,0,41,108,1,0,0,0,43,113,1,0,0,0,45,126,1,0,0,0,47,129,
        1,0,0,0,49,50,5,59,0,0,50,2,1,0,0,0,51,52,5,108,0,0,52,53,5,101,
        0,0,53,54,5,116,0,0,54,4,1,0,0,0,55,56,5,61,0,0,56,6,1,0,0,0,57,
        58,5,105,0,0,58,59,5,102,0,0,59,8,1,0,0,0,60,61,5,40,0,0,61,10,1,
        0,0,0,62,63,5,41,0,0,63,12,1,0,0,0,64,65,5,101,0,0,65,66,5,108,0,
        0,66,67,5,115,0,0,67,68,5,101,0,0,68,14,1,0,0,0,69,70,5,119,0,0,
        70,71,5,104,0,0,71,72,5,105,0,0,72,73,5,108,0,0,73,74,5,101,0,0,
        74,16,1,0,0,0,75,76,5,123,0,0,76,18,1,0,0,0,77,78,5,125,0,0,78,20,
        1,0,0,0,79,80,5,45,0,0,80,22,1,0,0,0,81,82,5,33,0,0,82,24,1,0,0,
        0,83,84,5,42,0,0,84,26,1,0,0,0,85,86,5,47,0,0,86,28,1,0,0,0,87,88,
        5,43,0,0,88,30,1,0,0,0,89,90,5,38,0,0,90,91,5,38,0,0,91,32,1,0,0,
        0,92,93,5,124,0,0,93,94,5,124,0,0,94,34,1,0,0,0,95,96,5,61,0,0,96,
        97,5,62,0,0,97,36,1,0,0,0,98,99,5,105,0,0,99,100,5,110,0,0,100,101,
        5,116,0,0,101,38,1,0,0,0,102,103,5,98,0,0,103,104,5,111,0,0,104,
        105,5,111,0,0,105,106,5,108,0,0,106,40,1,0,0,0,107,109,7,0,0,0,108,
        107,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,
        42,1,0,0,0,112,114,7,1,0,0,113,112,1,0,0,0,114,115,1,0,0,0,115,113,
        1,0,0,0,115,116,1,0,0,0,116,44,1,0,0,0,117,118,5,116,0,0,118,119,
        5,114,0,0,119,120,5,117,0,0,120,127,5,101,0,0,121,122,5,102,0,0,
        122,123,5,97,0,0,123,124,5,108,0,0,124,125,5,115,0,0,125,127,5,101,
        0,0,126,117,1,0,0,0,126,121,1,0,0,0,127,46,1,0,0,0,128,130,7,2,0,
        0,129,128,1,0,0,0,130,131,1,0,0,0,131,129,1,0,0,0,131,132,1,0,0,
        0,132,48,1,0,0,0,5,0,110,115,126,131,0
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