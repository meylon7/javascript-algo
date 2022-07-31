// Object Matching, Shorthand Notation
// Intuitive and flexible destructuring of Objects into individual 
// variables during assignment.

// ECMAScript 6
var { op, lhs, rhs } = getASTNode()

// ECMAScript 5
var tmp = getASTNode();
var op  = tmp.op;
var lhs = tmp.lhs;
var rhs = tmp.rhs;