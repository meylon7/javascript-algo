// Symbol Type
// Unique and immutable data type to be used as an identifier for object properties. 
// Symbol can have an optional description, but for debugging purposes only.
Symbol("foo") !== Symbol("foo") // true
const foo = Symbol() // Unique and immutable data type
const bar = Symbol() // Unique and immutable data type
typeof foo === "symbol"
typeof bar === "symbol"
console.log(foo === bar) // false 
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ foo, bar ]
console.log(obj)