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
    public static readonly NUMBER = 18;
    public static readonly NAME = 19;
    public static readonly BOOLEAN = 20;
    public static readonly WS = 21;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'let'", "'='", "'if'", "'('", "')'", "'while'", "'{'", 
        "'}'", "'-'", "'!'", "'*'", "'/'", "'+'", "'&&'", "'||'", "'=>'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "NUMBER", "NAME", "BOOLEAN", 
        "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "NUMBER", "NAME", "BOOLEAN", "WS",
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
        4,0,21,115,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,
        1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,
        1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,
        1,16,1,16,1,17,4,17,89,8,17,11,17,12,17,90,1,18,4,18,94,8,18,11,
        18,12,18,95,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,107,
        8,19,1,20,4,20,110,8,20,11,20,12,20,111,1,20,1,20,0,0,21,1,1,3,2,
        5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
        15,31,16,33,17,35,18,37,19,39,20,41,21,1,0,3,1,0,48,57,2,0,65,90,
        97,122,3,0,9,10,13,13,32,32,118,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
        0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,
        0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
        0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,
        0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,1,43,1,0,0,0,3,45,1,0,0,
        0,5,49,1,0,0,0,7,51,1,0,0,0,9,54,1,0,0,0,11,56,1,0,0,0,13,58,1,0,
        0,0,15,64,1,0,0,0,17,66,1,0,0,0,19,68,1,0,0,0,21,70,1,0,0,0,23,72,
        1,0,0,0,25,74,1,0,0,0,27,76,1,0,0,0,29,78,1,0,0,0,31,81,1,0,0,0,
        33,84,1,0,0,0,35,88,1,0,0,0,37,93,1,0,0,0,39,106,1,0,0,0,41,109,
        1,0,0,0,43,44,5,59,0,0,44,2,1,0,0,0,45,46,5,108,0,0,46,47,5,101,
        0,0,47,48,5,116,0,0,48,4,1,0,0,0,49,50,5,61,0,0,50,6,1,0,0,0,51,
        52,5,105,0,0,52,53,5,102,0,0,53,8,1,0,0,0,54,55,5,40,0,0,55,10,1,
        0,0,0,56,57,5,41,0,0,57,12,1,0,0,0,58,59,5,119,0,0,59,60,5,104,0,
        0,60,61,5,105,0,0,61,62,5,108,0,0,62,63,5,101,0,0,63,14,1,0,0,0,
        64,65,5,123,0,0,65,16,1,0,0,0,66,67,5,125,0,0,67,18,1,0,0,0,68,69,
        5,45,0,0,69,20,1,0,0,0,70,71,5,33,0,0,71,22,1,0,0,0,72,73,5,42,0,
        0,73,24,1,0,0,0,74,75,5,47,0,0,75,26,1,0,0,0,76,77,5,43,0,0,77,28,
        1,0,0,0,78,79,5,38,0,0,79,80,5,38,0,0,80,30,1,0,0,0,81,82,5,124,
        0,0,82,83,5,124,0,0,83,32,1,0,0,0,84,85,5,61,0,0,85,86,5,62,0,0,
        86,34,1,0,0,0,87,89,7,0,0,0,88,87,1,0,0,0,89,90,1,0,0,0,90,88,1,
        0,0,0,90,91,1,0,0,0,91,36,1,0,0,0,92,94,7,1,0,0,93,92,1,0,0,0,94,
        95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,38,1,0,0,0,97,98,5,116,
        0,0,98,99,5,114,0,0,99,100,5,117,0,0,100,107,5,101,0,0,101,102,5,
        102,0,0,102,103,5,97,0,0,103,104,5,108,0,0,104,105,5,115,0,0,105,
        107,5,101,0,0,106,97,1,0,0,0,106,101,1,0,0,0,107,40,1,0,0,0,108,
        110,7,2,0,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,0,0,111,
        112,1,0,0,0,112,113,1,0,0,0,113,114,6,20,0,0,114,42,1,0,0,0,5,0,
        90,95,106,111,1,6,0,0
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