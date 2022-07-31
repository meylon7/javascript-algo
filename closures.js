// closures

// Access to its own scope.
// Access to the variables of the outer function.
// Access to the global variables.

function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        console.log(outerVariable);
    }

    InnerFunction();
}
var innerFunc = OuterFunction(); // 100


function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4