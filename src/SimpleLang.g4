grammar SimpleLang;

// Parser rules
prog: sequence EOF;

sequence: statement+;

statement: expression ';'                           # ExprStmt
         | 'let' type ':' NAME '=' expression ';'      # ConstDecl
         | 'if' '(' expression ')' block 'else' block # IfStmt
         | 'while' '(' expression ')' block         # WhileStmt
         | block   # BlockStmt
         | 'return' expression ';'                  #ReturnStmt
         | 'fn' NAME '(' (type ':' NAME)* ')' '->' type block # FunctionDecl
         | NAME '(' expression* ')' #FunctionApp
         ;

block: '{' sequence '}';

expression: '-' expression                          # Negate
          | '!' expression                          # Not
          | expression ('*' | '/' ) expression            # MulDiv
          | expression ('+' | '-') expression             # AddSub
          | expression ('&&' | '||') expression           # Logical
          | '(' expression ')'                      # Parens
          | lambdaExpr                         # Lambda
          | literal                            # literals
          | NAME                               # Variable
          ;

literal: INTEGER # integer
       | BOOLEAN # boolean
       ;

lambdaExpr: (NAME*) '=>' block;
type: 'int' #IntType
    | 'bool' #BoolType
    | 'fn' '(' (type (',' type)*)? ')' '->' type #FunctionType
    ;

// Lexer rules
INTEGER: [0-9]+;
BOOLEAN: 'true' | 'false';
NAME: [a-zA-Z]+;
SEPARATOR: [ \t\r\n]+ -> skip;

