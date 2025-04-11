grammar SimpleLang;

// Parser rules
prog: sequence EOF;

sequence: statement+;

statement: expression ';'                           # ExprStmt
         | 'let' NAME ':' type '=' expression ';'      # ConstDecl
         | 'let' 'mut' NAME ':' type '=' expression ';' # MutConstDecl
         | NAME '=' expression ';'                     # Assignment
         | '*'NAME '=' expression ';'                  # PtrAssignment
         | 'if' '(' expression ')' block 'else' block # IfStmt
         | 'while' '(' expression ')' block         # WhileStmt
         | block   # BlockStmt
         | 'return' expression ';'                  #ReturnStmt
         | 'fn' NAME '(' (NAME ':' type)* ')' '->' type block # FunctionDecl
         ;

block: '{' sequence '}';

expression: NAME                                         # Variable
          | literal                                      # literals
          | STRING                                       # String
          | '(' expression ')'                           # Parens
          | NAME '(' expression* ')'                     # FunctionApp
          | lambdaExpr                                   # Lambda
          | '&' NAME                      # Borrow
          | '&' 'mut' NAME                   # MutBorrow
          | '*' NAME                      # Dereference
          | '-' expression                             # Negate
          | '!' expression                             # Not
          | expression ('*' | '/' ) expression        # MulDiv
          | expression ('+' | '-') expression         # AddSub
          | expression ('&&' | '||') expression       # Logical
          | expression ('<' | '<=' | '>' | '>=' ) expression     # Comparison
          | expression ('==' | '!=' )  expression               # Equality
          ;


literal: INTEGER # integer
       | BOOLEAN # boolean
       | 'undefined' # undefined
       ;

lambdaExpr: (NAME*) '=>' block;

type: 'int' #IntType
    | 'bool' #BoolType
    | '*int' #IntPointerType
    | '*bool' #BoolPointerType
    | '*mut int' #IntMutPointerType
    | '*mut bool' #BoolMutPointerType
    | 'string' #StringType
    | '*string' #StringPointerType
    | '*mut string' #StringMutPointerType
    | 'fn' '(' (type (',' type)*)? ')' '->' type #FunctionType
    | 'undefined'    #UndefinedType
    ;

// Lexer rules
INTEGER: [0-9]+;
BOOLEAN: 'true' | 'false';
NAME: [a-zA-Z]+;
STRING: '"'[a-zA-Z0-9]*'"';
SEPARATOR: [ \t\r\n]+ -> skip;

