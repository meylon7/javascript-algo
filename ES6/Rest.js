// ECMAScript 6 
function f(x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9

// ECMAScript 5
function f2(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f2(1, 2, "hello", true, 7) === 9;

console.log("f():", f(1, 2, "hello", true, 7) === 9)
console.log("f2():", f2(1, 2, "hello", true, 7) === 9)