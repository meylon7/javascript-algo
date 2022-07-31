console.log(0.1 + 0.2 === 0.3) // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true
// EPSILON property represents the difference between 1 and the smallest 
// floating point number greater than 1.

// ECMAScript 5
console.log(0.1 + 0.2 === 0.3); // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < 2.220446049250313e-16); // true