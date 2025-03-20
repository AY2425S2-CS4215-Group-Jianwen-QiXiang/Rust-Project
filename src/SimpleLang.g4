grammar SimpleLang;

// Parser rules
prog: sequence EOF;

sequence: statement+;

statement: expression ';'                           # ExprStmt
         | 'let' type ':' NAME '=' expression ';'      # ConstDecl
         | 'if' '(' expression ')' block 'else' block # IfStmt
         | 'while' '(' expression ')' block         # WhileStmt
         | block   # BlockStmt
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
type: 'int' | 'bool';



// Lexer rules
INTEGER: [0-9]+;
NAME: [a-zA-Z]+;
BOOLEAN: 'true' | 'false';
SEPARATOR: [ \t\r\n]+ -> skip;
