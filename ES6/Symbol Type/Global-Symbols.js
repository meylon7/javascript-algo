// Global Symbols
// Global symbols, indexed through unique keys.

Symbol.for("app.foo") === Symbol.for("app.foo")
console.log("1:",Symbol.for("app.foo") === Symbol.for("app.foo")) // true

const foo = Symbol.for("app.foo")
const bar = Symbol.for("app.bar")
console.log("2:",foo,bar) // Symbol(app.foo) Symbol(app.bar)

Symbol.keyFor(foo) === "app.foo"
Symbol.keyFor(bar) === "app.bar"
console.log("3:",Symbol.keyFor(foo),Symbol.keyFor(bar)) // app.foo app.bar

typeof foo === "symbol"
typeof bar === "symbol"
console.log("4:",foo, bar) // Symbol(app.foo) Symbol(app.bar)
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
console.log("5:", obj) // { [Symbol(app.foo)]: 'foo', [Symbol(app.bar)]: 'bar' }

JSON.stringify(obj) // {}
console.log("6:", JSON.stringify(obj)) // {}

Object.keys(obj) // []
console.log("7:", Object.keys(obj)) // []

Object.getOwnPropertyNames(obj) // []
console.log("8:", Object.getOwnPropertyNames(obj)) // []

Object.getOwnPropertySymbols(obj) // [ foo, bar ]
console.log("9:", Object.getOwnPropertySymbols(obj)) // [ Symbol(app.foo), Symbol(app.bar) ]

