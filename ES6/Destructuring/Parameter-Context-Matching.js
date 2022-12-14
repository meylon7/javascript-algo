// Parameter Context Matching
// Intuitive and flexible destructuring of Arrays and Objects into individual 
// parameters during function calls.

// ECMAScript 6
function f([name, val]) {
    console.log(name, val)
}
function g({ name: n, val: v }) {
    console.log(n, v)
}
function h({ name, val }) {
    console.log(name, val)
}
f(["bar", 42])
g({ name: "foo", val: 7 })
h({ name: "bar", val: 42 })

// ECMAScript 5
function f(arg) {
    var name = arg[0];
    var val = arg[1];
    console.log(name, val);
};
function g(arg) {
    var n = arg.name;
    var v = arg.val;
    console.log(n, v);
};
function h(arg) {
    var name = arg.name;
    var val = arg.val;
    console.log(name, val);
};
f(["bar", 42]);
g({ name: "foo", val: 7 });
h({ name: "bar", val: 42 });