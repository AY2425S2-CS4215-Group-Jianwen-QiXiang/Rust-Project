
import { Evaluator, Parser} from './src/SimpleLangEvaluator'


//console.log((new Evaluator()).evaluate('1 + 2; 3 + 4;'))
//console.log((new Evaluator()).evaluate("let int: z = 10;"))
console.log((new Evaluator()).evaluate("let int: z = 10; let &int: y = &z; let &int : x = y; y;"))
//console.log((new Evaluator()).typeCheck("let mut int: z = 10;"))
