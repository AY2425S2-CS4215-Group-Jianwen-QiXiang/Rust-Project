grammar SimpleLang;

// Parser rules
prog: sequence EOF;

sequence: (stmt | expr)+;

stmt: expr ';'                           # ExprStmt
    | 'let' type NAME '=' expr           # ConstDecl
    | 'if' '(' expr ')' block 'else' block  # IfStmt
    | 'while' '(' expr ')' block         # WhileStmt
    ;

block: '{' sequence '}';

expr: '-' expr                          # Negate
    | '!' expr                          # Not
    | expr ('*' | '/' ) expr            # MulDiv
    | expr ('+' | '-') expr             # AddSub
    | expr ('&&' | '||') expr           # Logical
    | '(' expr ')'                      # Parens
    | lambdaExpr                         # Lambda
    | BOOLEAN                            # Boolean
    | NUMBER                             # Number
    | NAME                               # Variable
    ;

lambdaExpr: (NAME*) '=>' block;
type: 'int' | 'bool';

// Lexer rules
NUMBER: [0-9]+;
NAME: [a-zA-Z]+;
BOOLEAN: 'true' | 'false';
WS: [ \t\r\n]+ -> skip;