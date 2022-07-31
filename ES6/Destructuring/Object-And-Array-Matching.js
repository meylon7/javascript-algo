// Object And Array Matching, Default Values
// Simple and intuitive default values for destructuring of Objects and Arrays.

// ECMAScript 6
var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj
var [ x, y = 2 ] = list
// ECMAScript 5
var obj = { a: 1 };
var list = [ 1 ];
var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;
var x = list[0];
var y = list[1] === undefined ? 2 : list[1];