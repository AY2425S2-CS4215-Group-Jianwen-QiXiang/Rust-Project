// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./SimpleLangParser.js";
import { SequenceContext } from "./SimpleLangParser.js";
import { ExprStmtContext } from "./SimpleLangParser.js";
import { ConstDeclContext } from "./SimpleLangParser.js";
import { MutConstDeclContext } from "./SimpleLangParser.js";
import { AssignmentContext } from "./SimpleLangParser.js";
import { PtrAssignmentContext } from "./SimpleLangParser.js";
import { IfStmtContext } from "./SimpleLangParser.js";
import { WhileStmtContext } from "./SimpleLangParser.js";
import { BlockStmtContext } from "./SimpleLangParser.js";
import { ReturnStmtContext } from "./SimpleLangParser.js";
import { FunctionDeclContext } from "./SimpleLangParser.js";
import { BlockContext } from "./SimpleLangParser.js";
import { MutBorrowContext } from "./SimpleLangParser.js";
import { VariableContext } from "./SimpleLangParser.js";
import { BorrowContext } from "./SimpleLangParser.js";
import { MulDivContext } from "./SimpleLangParser.js";
import { AddSubContext } from "./SimpleLangParser.js";
import { ParensContext } from "./SimpleLangParser.js";
import { LiteralsContext } from "./SimpleLangParser.js";
import { LogicalContext } from "./SimpleLangParser.js";
import { StringContext } from "./SimpleLangParser.js";
import { FunctionAppContext } from "./SimpleLangParser.js";
import { NotContext } from "./SimpleLangParser.js";
import { ComparisonContext } from "./SimpleLangParser.js";
import { NegateContext } from "./SimpleLangParser.js";
import { EqualityContext } from "./SimpleLangParser.js";
import { LambdaContext } from "./SimpleLangParser.js";
import { DereferenceContext } from "./SimpleLangParser.js";
import { IntegerContext } from "./SimpleLangParser.js";
import { BooleanContext } from "./SimpleLangParser.js";
import { UndefinedContext } from "./SimpleLangParser.js";
import { LambdaExprContext } from "./SimpleLangParser.js";
import { IntTypeContext } from "./SimpleLangParser.js";
import { BoolTypeContext } from "./SimpleLangParser.js";
import { IntPointerTypeContext } from "./SimpleLangParser.js";
import { BoolPointerTypeContext } from "./SimpleLangParser.js";
import { IntMutPointerTypeContext } from "./SimpleLangParser.js";
import { BoolMutPointerTypeContext } from "./SimpleLangParser.js";
import { StringTypeContext } from "./SimpleLangParser.js";
import { StringPointerTypeContext } from "./SimpleLangParser.js";
import { StringMutPointerTypeContext } from "./SimpleLangParser.js";
import { FunctionTypeContext } from "./SimpleLangParser.js";
import { UndefinedTypeContext } from "./SimpleLangParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SimpleLangVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence?: (ctx: SequenceContext) => Result;
    /**
     * Visit a parse tree produced by the `ExprStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ConstDecl`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstDecl?: (ctx: ConstDeclContext) => Result;
    /**
     * Visit a parse tree produced by the `MutConstDecl`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMutConstDecl?: (ctx: MutConstDeclContext) => Result;
    /**
     * Visit a parse tree produced by the `Assignment`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `PtrAssignment`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPtrAssignment?: (ctx: PtrAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `IfStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStmt?: (ctx: IfStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `WhileStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStmt?: (ctx: WhileStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `BlockStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStmt?: (ctx: BlockStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ReturnStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctionDecl`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by the `MutBorrow`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMutBorrow?: (ctx: MutBorrowContext) => Result;
    /**
     * Visit a parse tree produced by the `Variable`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable?: (ctx: VariableContext) => Result;
    /**
     * Visit a parse tree produced by the `Borrow`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBorrow?: (ctx: BorrowContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDiv`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDiv?: (ctx: MulDivContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSub`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSub?: (ctx: AddSubContext) => Result;
    /**
     * Visit a parse tree produced by the `Parens`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParens?: (ctx: ParensContext) => Result;
    /**
     * Visit a parse tree produced by the `literals`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiterals?: (ctx: LiteralsContext) => Result;
    /**
     * Visit a parse tree produced by the `Logical`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical?: (ctx: LogicalContext) => Result;
    /**
     * Visit a parse tree produced by the `String`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctionApp`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionApp?: (ctx: FunctionAppContext) => Result;
    /**
     * Visit a parse tree produced by the `Not`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNot?: (ctx: NotContext) => Result;
    /**
     * Visit a parse tree produced by the `Comparison`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `Negate`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNegate?: (ctx: NegateContext) => Result;
    /**
     * Visit a parse tree produced by the `Equality`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEquality?: (ctx: EqualityContext) => Result;
    /**
     * Visit a parse tree produced by the `Lambda`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambda?: (ctx: LambdaContext) => Result;
    /**
     * Visit a parse tree produced by the `Dereference`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `integer`
     * labeled alternative in `SimpleLangParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInteger?: (ctx: IntegerContext) => Result;
    /**
     * Visit a parse tree produced by the `boolean`
     * labeled alternative in `SimpleLangParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolean?: (ctx: BooleanContext) => Result;
    /**
     * Visit a parse tree produced by the `undefined`
     * labeled alternative in `SimpleLangParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUndefined?: (ctx: UndefinedContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.lambdaExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaExpr?: (ctx: LambdaExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IntType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntType?: (ctx: IntTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `BoolType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolType?: (ctx: BoolTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `IntPointerType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntPointerType?: (ctx: IntPointerTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `BoolPointerType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolPointerType?: (ctx: BoolPointerTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `IntMutPointerType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntMutPointerType?: (ctx: IntMutPointerTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `BoolMutPointerType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolMutPointerType?: (ctx: BoolMutPointerTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `StringType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringType?: (ctx: StringTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `StringPointerType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringPointerType?: (ctx: StringPointerTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `StringMutPointerType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringMutPointerType?: (ctx: StringMutPointerTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctionType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionType?: (ctx: FunctionTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `UndefinedType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUndefinedType?: (ctx: UndefinedTypeContext) => Result;
}

