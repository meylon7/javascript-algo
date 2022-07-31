// Currying is defined as changing a function having multiple arguments
// into a sequence of functions with a single argument.

// Benefits of Currying
//    1. Currying helps to prevent the passing of the same variable, again and again.
//    2. It is useful in event handling.
//    3. Write little code modules that can be easily reused and configured.
// We can implement currying using two methods -
// It can be achieved by using the bind() method
// It can be achieved by using the closures

// sample 1 using bind()
function mul(val1, val2) {
    console.log(val1 * val2 );
}

let var1 = mul.bind(this, 5);
console.log("var1 method");
var1(4);
var1(7);
let var2 = mul.bind(this, 4);
console.log("var2 method")
var2(2);
var2(4);  
// sample 2 using closures
function mul(val1){  
    return function(val2){  
        console.log(val1 * val2 );  
    }  
}  
  
let a = mul(2);  
a(5);  
a(6);  