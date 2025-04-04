grammar SimpleLang;

// Parser rules
prog: sequence EOF;

sequence: statement+;

statement: expression ';'                           # ExprStmt
         | 'let' type ':' NAME '=' expression ';'      # ConstDecl
         | 'let' 'mut' type ':' NAME '=' expression ';' # MutConstDecl
         | NAME '=' expression ';'                     # Assignment
         | 'if' '(' expression ')' block 'else' block # IfStmt
         | 'while' '(' expression ')' block         # WhileStmt
         | block   # BlockStmt
         | 'return' expression ';'                  #ReturnStmt
         | 'fn' NAME '(' (type ':' NAME)* ')' '->' type block # FunctionDecl
         ;

block: '{' sequence '}';

expression: NAME                                         # Variable
          | literal                                      # literals
          | '(' expression ')'                           # Parens
          | NAME '(' expression* ')'                     # FunctionApp
          | lambdaExpr                                   # Lambda
          | '&' NAME                      # Borrow
          | '&mut' NAME                   # MutBorrow
          | '*' NAME                      # Dereference
          | '-' expression                             # Negate
          | '!' expression                             # Not
          | expression ('*' | '/' ) expression        # MulDiv
          | expression ('+' | '-') expression         # AddSub
          | expression ('&&' | '||') expression       # Logical
          ;


literal: INTEGER # integer
       | BOOLEAN # boolean
       ;

lambdaExpr: (NAME*) '=>' block;

type: 'int' #IntType
    | 'bool' #BoolType
    | '&int' #IntPointerType
    | '&bool' #BoolPointerType
    | 'fn' '(' (type (',' type)*)? ')' '->' type #FunctionType
    ;

// Lexer rules
INTEGER: [0-9]+;
BOOLEAN: 'true' | 'false';
NAME: [a-zA-Z]+;
SEPARATOR: [ \t\r\n]+ -> skip;

