
import { Evaluator, Parser} from '../SimpleLangEvaluator'


console.log((new Evaluator()).evaluate('1 + 2; 3 + 4;'))

console.log((new Evaluator()).evaluate("let int: z = 10; let &int: y = &z;"))
console.log((new Evaluator()).typeCheck("let mut int: z = 10;"))
