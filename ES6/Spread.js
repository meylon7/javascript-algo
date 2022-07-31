// Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and 
// individual function parameters.
// ECMAScript 6
var params = ["hello", true, 7]
var other = [1, 2, ...params] // [ 1, 2, "hello", true, 7 ]

function f(x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9

var str = "foo"
var chars = [...str] // [ "f", "o", "o" ]
// ECMAScript 5
var params = ["hello", true, 7];
var other = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]

function f(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [1, 2].concat(params)) === 9;

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]