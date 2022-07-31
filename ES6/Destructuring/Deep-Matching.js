// Object Matching, Deep Matching
// Intuitive and flexible destructuring of Objects into individual variables 
// during assignment.

// ECMAScript 6
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
// ECMAScript 5
var tmp = getASTNode();
var a = tmp.op;
var b = tmp.lhs.op;
var c = tmp.rhs;