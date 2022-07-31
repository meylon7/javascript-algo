// IIFE = clean scope

(function () {
    //write your js code here
})();

const calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }
    return {
        add: add,
        multiply: multiply
    }
})();
console.log(calculator.add(4,6))
var userName = "Bill";

(function (name) {

    function display(name)
    {
        console.log("MyScript2.js: " + name);
    }

    display(name);
})(userName);