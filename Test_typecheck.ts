import { Evaluator, Parser} from './src/SimpleLangEvaluator'

// The testcases for type checking. All the testcases should return an error

console.log("\n")
console.log("Test 1 for binary operations on integers")
console.log((new Evaluator()).evaluate('1 + true;'))
console.log("\n")
console.log("Test 2 for binary operations on booleans")
console.log((new Evaluator()).evaluate('1 || true;'))
console.log("\n")
console.log("Test 3 for constant declaration and accessing")
console.log((new Evaluator()).evaluate("let z : int = true; z;"))
console.log((new Evaluator()).evaluate("let z : int = 2; z = 3;")) // trying to modify a constant
console.log("\n")
console.log("Test 4 for variable declaration, reassignment and accessing")
console.log((new Evaluator()).evaluate("let mut z : int = 10; z = true; z;"))
console.log("\n")
console.log("Test 5 for if-else statement")
console.log(new Evaluator().evaluate("if (false) {1;} else {true;}")) // Different result type in two branches
console.log(new Evaluator().evaluate("if (1) {1;} else {1;}")) // Predicate is not boolean
console.log("\n")
console.log("Test 6 for while loop statement")
console.log(new Evaluator().evaluate("let mut z: int = 0; while (z < 10) {z = z + false;} z;"))
console.log(new Evaluator().evaluate("let mut z: int = 0; while (z) {z = z + 1;} z;")) // Predicate is not boolean
console.log("\n")
console.log("Test 7 for block statement")
console.log(new Evaluator().evaluate("let mut z: int  = 10; {let mut z : int = 20; z = false;} z; "))
console.log(new Evaluator().evaluate("let mut z: int  = 10; let mut z : int = 20; z; ")) // Repeated Declaration in the same scope
console.log("\n")
console.log("Test 8 for immutable borrow")
console.log((new Evaluator()).evaluate("let z : int = 10; let p : *bool = &z; *p + 10;"))
console.log((new Evaluator()).evaluate("let z : int = 10; let p : *int = &z; *p || false;"))
console.log((new Evaluator()).evaluate("let z : int = 10; let p : *int = &z; *p = 1;")) // trying to modify a immutable pointer
console.log((new Evaluator()).evaluate("let z : int = 10; *z;")) // Dereference a non-pointer value
console.log("\n")
console.log("Test 9 for mutable borrow")
console.log((new Evaluator()).evaluate("let mut z : int = 10; let p : *mut bool = &mut z;"))
console.log((new Evaluator()).evaluate("let mut z : int = 10; let p : *mut int = &mut z; *p = false;"))
console.log((new Evaluator()).evaluate("let z : int = 10; *z = 10;")) // Trying to modify value through mutable reference with a non-pointer value
console.log("\n")
console.log("Test 10 for function declaration") // Check on use
console.log((new Evaluator()).evaluate("fn f(a : int) -> int {return false;}"))
console.log((new Evaluator()).evaluate("fn f(a : int) -> int {return false;} f(1);"))
console.log("\n")
console.log("Test 11 for function application")
console.log((new Evaluator()).evaluate("fn f(a : int) -> int {return 1;} f(1 ,2);")) // Incorrect number of argument
console.log((new Evaluator()).evaluate("fn f(a : int) -> int {return 1;} f(false);")) // Incorrect type of argument
console.log((new Evaluator()).evaluate("let z : int = 10; z(1);")) // Calling non-function value