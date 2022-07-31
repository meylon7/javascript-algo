// ECMAScript 6 
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50
// ECMAScript 5
function f2 (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
f2(1) === 50;

console.log("f():", f(1) === 50)
console.log("f2():", f2(1) === 50)