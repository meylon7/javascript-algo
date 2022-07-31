// Array Element Finding
// New function for finding an element in an array.
[ 1, 3, 4, 2 ].find(x => x > 3) // 4
[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2

// ECMAScript 5
[ 1, 3, 4, 2 ].filter(function (x) { return x > 3; })[0]; // 4
// findIndex no equivalent in ES5