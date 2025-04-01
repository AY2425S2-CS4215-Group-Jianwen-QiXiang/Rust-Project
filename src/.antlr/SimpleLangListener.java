// Generated from d:/Academy/NUS term4/4215/Rust-Project/src/SimpleLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SimpleLangParser}.
 */
public interface SimpleLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(SimpleLangParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(SimpleLangParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#sequence}.
	 * @param ctx the parse tree
	 */
	void enterSequence(SimpleLangParser.SequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#sequence}.
	 * @param ctx the parse tree
	 */
	void exitSequence(SimpleLangParser.SequenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ExprStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterExprStmt(SimpleLangParser.ExprStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ExprStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitExprStmt(SimpleLangParser.ExprStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ConstDecl}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterConstDecl(SimpleLangParser.ConstDeclContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ConstDecl}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitConstDecl(SimpleLangParser.ConstDeclContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IfStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt(SimpleLangParser.IfStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IfStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt(SimpleLangParser.IfStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code WhileStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStmt(SimpleLangParser.WhileStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code WhileStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStmt(SimpleLangParser.WhileStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BlockStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterBlockStmt(SimpleLangParser.BlockStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BlockStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitBlockStmt(SimpleLangParser.BlockStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ReturnStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStmt(SimpleLangParser.ReturnStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ReturnStmt}
	 * labeled alternative in {@link SimpleLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStmt(SimpleLangParser.ReturnStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(SimpleLangParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(SimpleLangParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Not}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNot(SimpleLangParser.NotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Not}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNot(SimpleLangParser.NotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Variable}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterVariable(SimpleLangParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Variable}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitVariable(SimpleLangParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMulDiv(SimpleLangParser.MulDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMulDiv(SimpleLangParser.MulDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(SimpleLangParser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(SimpleLangParser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Parens}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterParens(SimpleLangParser.ParensContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Parens}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitParens(SimpleLangParser.ParensContext ctx);
	/**
	 * Enter a parse tree produced by the {@code literals}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLiterals(SimpleLangParser.LiteralsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code literals}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLiterals(SimpleLangParser.LiteralsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Logical}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLogical(SimpleLangParser.LogicalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Logical}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLogical(SimpleLangParser.LogicalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Negate}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNegate(SimpleLangParser.NegateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Negate}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNegate(SimpleLangParser.NegateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Lambda}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLambda(SimpleLangParser.LambdaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Lambda}
	 * labeled alternative in {@link SimpleLangParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLambda(SimpleLangParser.LambdaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code integer}
	 * labeled alternative in {@link SimpleLangParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterInteger(SimpleLangParser.IntegerContext ctx);
	/**
	 * Exit a parse tree produced by the {@code integer}
	 * labeled alternative in {@link SimpleLangParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitInteger(SimpleLangParser.IntegerContext ctx);
	/**
	 * Enter a parse tree produced by the {@code boolean}
	 * labeled alternative in {@link SimpleLangParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterBoolean(SimpleLangParser.BooleanContext ctx);
	/**
	 * Exit a parse tree produced by the {@code boolean}
	 * labeled alternative in {@link SimpleLangParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitBoolean(SimpleLangParser.BooleanContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#lambdaExpr}.
	 * @param ctx the parse tree
	 */
	void enterLambdaExpr(SimpleLangParser.LambdaExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#lambdaExpr}.
	 * @param ctx the parse tree
	 */
	void exitLambdaExpr(SimpleLangParser.LambdaExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(SimpleLangParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(SimpleLangParser.TypeContext ctx);
}