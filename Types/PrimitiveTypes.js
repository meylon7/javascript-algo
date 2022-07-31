// Types in javascript

// Number
// String
// Boolean
// Symbol
// undefined
// null
// BigInt

console.log([] === []) // false // Array store in different places in memory

console.log(JSON.stringify([]) === JSON.stringify([])) // true 

// easy way is to convert to string faster way
const compareArray = (a,b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log(compareArray([],[]))