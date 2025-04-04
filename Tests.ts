
import { Evaluator, Parser} from './src/SimpleLangEvaluator'

console.log("Test 1")
console.log((new Evaluator()).evaluate('1 + 2; 2 + 3;'))
console.log("\n")
console.log("Test 2")
console.log((new Evaluator()).evaluate('((true && false) || false) || true;'))
console.log("\n")
console.log("Test 3")
console.log((new Evaluator()).evaluate("let int: z = 10; z;"))
console.log("\n")
console.log("Test 4")
console.log((new Evaluator()).evaluate("fn f (int : a) -> int {return a + 1;} f(3);"))
//console.log((new Evaluator()).evaluate("let int: a = 10; let &int: b = &a; let &int : c = b; b;"))
//console.log((new Evaluator()).typeCheck("let mut int: z = 10;"))
