// Computed Property Names
// Support for computed names in object property definitions.
function quux(){
    return "bazz"
}
// ECMAScript 6 
let obj = {
    foo: "bar",
    ["baz" + quux()]: 42
}
// ECMAScript 5
var obj2 = {
    foo: "bar"
};
obj2["baz" + quux()] = 42;

console.log("obj:", obj)
console.log("obj2:", obj2)