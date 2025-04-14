import { Evaluator, Parser} from './src/SimpleLangEvaluator'

console.log("\n")
console.log("Test 1")
console.log(new Evaluator().evaluate("fn f (a : *mut int) -> undefined {return undefined;} let mut a : int = 1; let b : *mut int = &mut a; f(b); *b;"))
console.log("\n")
console.log("Test 2")
console.log(new Evaluator().evaluate("fn f (a : int) -> int {if (a == 0) {return 0;} else {return a + f(a - 1);}} f(10);"))
console.log("\n")
console.log("Test 3")
console.log(new Evaluator().evaluate("fn f (a : int) -> undefined {if (a == 0) {0;} else {f(a - 1);}} f(0);"))