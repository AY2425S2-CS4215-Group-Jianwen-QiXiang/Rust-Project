grammar SimpleLang;

// Parser rules
prog: sequence EOF;

sequence: (statement | expression)+;

statement: expression ';'                           # ExprStmt
         | 'let' type NAME '=' expression           # ConstDecl
         | 'if' '(' expression ')' block 'else' block  # IfStmt
         | 'while' '(' expression ')' block         # WhileStmt
         ;

block: '{' sequence '}';

expression: '-' expression                          # Negate
          | '!' expression                          # Not
          | expression ('*' | '/' ) expression            # MulDiv
          | expression ('+' | '-') expression             # AddSub
          | expression ('&&' | '||') expression           # Logical
          | '(' expression ')'                      # Parens
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