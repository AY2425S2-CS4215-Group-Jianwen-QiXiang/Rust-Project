// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./SimpleLangParser.js";
import { SequenceContext } from "./SimpleLangParser.js";
import { ExprStmtContext } from "./SimpleLangParser.js";
import { ConstDeclContext } from "./SimpleLangParser.js";
import { IfStmtContext } from "./SimpleLangParser.js";
import { WhileStmtContext } from "./SimpleLangParser.js";
import { BlockStmtContext } from "./SimpleLangParser.js";
import { ReturnStmtContext } from "./SimpleLangParser.js";
import { FunctionDeclContext } from "./SimpleLangParser.js";
import { BlockContext } from "./SimpleLangParser.js";
import { NotContext } from "./SimpleLangParser.js";
import { MulDivContext } from "./SimpleLangParser.js";
import { AddSubContext } from "./SimpleLangParser.js";
import { LogicalContext } from "./SimpleLangParser.js";
import { PrimaryExprContext } from "./SimpleLangParser.js";
import { NegateContext } from "./SimpleLangParser.js";
import { FunctionAppContext } from "./SimpleLangParser.js";
import { ParensContext } from "./SimpleLangParser.js";
import { LambdaContext } from "./SimpleLangParser.js";
import { LiteralsContext } from "./SimpleLangParser.js";
import { VariableContext } from "./SimpleLangParser.js";
import { IntegerContext } from "./SimpleLangParser.js";
import { BooleanContext } from "./SimpleLangParser.js";
import { LambdaExprContext } from "./SimpleLangParser.js";
import { IntTypeContext } from "./SimpleLangParser.js";
import { BoolTypeContext } from "./SimpleLangParser.js";
import { FunctionTypeContext } from "./SimpleLangParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleLangParser`.
 */
export class SimpleLangListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.sequence`.
     * @param ctx the parse tree
     */
    enterSequence?: (ctx: SequenceContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.sequence`.
     * @param ctx the parse tree
     */
    exitSequence?: (ctx: SequenceContext) => void;
    /**
     * Enter a parse tree produced by the `ExprStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Exit a parse tree produced by the `ExprStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Enter a parse tree produced by the `ConstDecl`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterConstDecl?: (ctx: ConstDeclContext) => void;
    /**
     * Exit a parse tree produced by the `ConstDecl`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitConstDecl?: (ctx: ConstDeclContext) => void;
    /**
     * Enter a parse tree produced by the `IfStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Exit a parse tree produced by the `IfStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Enter a parse tree produced by the `WhileStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Exit a parse tree produced by the `WhileStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Enter a parse tree produced by the `BlockStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterBlockStmt?: (ctx: BlockStmtContext) => void;
    /**
     * Exit a parse tree produced by the `BlockStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitBlockStmt?: (ctx: BlockStmtContext) => void;
    /**
     * Enter a parse tree produced by the `ReturnStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Exit a parse tree produced by the `ReturnStmt`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Enter a parse tree produced by the `FunctionDecl`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
    /**
     * Exit a parse tree produced by the `FunctionDecl`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitFunctionDecl?: (ctx: FunctionDeclContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by the `Not`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterNot?: (ctx: NotContext) => void;
    /**
     * Exit a parse tree produced by the `Not`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitNot?: (ctx: NotContext) => void;
    /**
     * Enter a parse tree produced by the `MulDiv`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterMulDiv?: (ctx: MulDivContext) => void;
    /**
     * Exit a parse tree produced by the `MulDiv`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitMulDiv?: (ctx: MulDivContext) => void;
    /**
     * Enter a parse tree produced by the `AddSub`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterAddSub?: (ctx: AddSubContext) => void;
    /**
     * Exit a parse tree produced by the `AddSub`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitAddSub?: (ctx: AddSubContext) => void;
    /**
     * Enter a parse tree produced by the `Logical`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterLogical?: (ctx: LogicalContext) => void;
    /**
     * Exit a parse tree produced by the `Logical`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitLogical?: (ctx: LogicalContext) => void;
    /**
     * Enter a parse tree produced by the `PrimaryExpr`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
    /**
     * Exit a parse tree produced by the `PrimaryExpr`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;
    /**
     * Enter a parse tree produced by the `Negate`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterNegate?: (ctx: NegateContext) => void;
    /**
     * Exit a parse tree produced by the `Negate`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitNegate?: (ctx: NegateContext) => void;
    /**
     * Enter a parse tree produced by the `FunctionApp`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    enterFunctionApp?: (ctx: FunctionAppContext) => void;
    /**
     * Exit a parse tree produced by the `FunctionApp`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    exitFunctionApp?: (ctx: FunctionAppContext) => void;
    /**
     * Enter a parse tree produced by the `Parens`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    enterParens?: (ctx: ParensContext) => void;
    /**
     * Exit a parse tree produced by the `Parens`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    exitParens?: (ctx: ParensContext) => void;
    /**
     * Enter a parse tree produced by the `Lambda`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    enterLambda?: (ctx: LambdaContext) => void;
    /**
     * Exit a parse tree produced by the `Lambda`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    exitLambda?: (ctx: LambdaContext) => void;
    /**
     * Enter a parse tree produced by the `literals`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    enterLiterals?: (ctx: LiteralsContext) => void;
    /**
     * Exit a parse tree produced by the `literals`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    exitLiterals?: (ctx: LiteralsContext) => void;
    /**
     * Enter a parse tree produced by the `Variable`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    enterVariable?: (ctx: VariableContext) => void;
    /**
     * Exit a parse tree produced by the `Variable`
     * labeled alternative in `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    exitVariable?: (ctx: VariableContext) => void;
    /**
     * Enter a parse tree produced by the `integer`
     * labeled alternative in `SimpleLangParser.literal`.
     * @param ctx the parse tree
     */
    enterInteger?: (ctx: IntegerContext) => void;
    /**
     * Exit a parse tree produced by the `integer`
     * labeled alternative in `SimpleLangParser.literal`.
     * @param ctx the parse tree
     */
    exitInteger?: (ctx: IntegerContext) => void;
    /**
     * Enter a parse tree produced by the `boolean`
     * labeled alternative in `SimpleLangParser.literal`.
     * @param ctx the parse tree
     */
    enterBoolean?: (ctx: BooleanContext) => void;
    /**
     * Exit a parse tree produced by the `boolean`
     * labeled alternative in `SimpleLangParser.literal`.
     * @param ctx the parse tree
     */
    exitBoolean?: (ctx: BooleanContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.lambdaExpr`.
     * @param ctx the parse tree
     */
    enterLambdaExpr?: (ctx: LambdaExprContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.lambdaExpr`.
     * @param ctx the parse tree
     */
    exitLambdaExpr?: (ctx: LambdaExprContext) => void;
    /**
     * Enter a parse tree produced by the `IntType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    enterIntType?: (ctx: IntTypeContext) => void;
    /**
     * Exit a parse tree produced by the `IntType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    exitIntType?: (ctx: IntTypeContext) => void;
    /**
     * Enter a parse tree produced by the `BoolType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    enterBoolType?: (ctx: BoolTypeContext) => void;
    /**
     * Exit a parse tree produced by the `BoolType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    exitBoolType?: (ctx: BoolTypeContext) => void;
    /**
     * Enter a parse tree produced by the `FunctionType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    enterFunctionType?: (ctx: FunctionTypeContext) => void;
    /**
     * Exit a parse tree produced by the `FunctionType`
     * labeled alternative in `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    exitFunctionType?: (ctx: FunctionTypeContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

