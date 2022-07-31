// Method Properties
// Support for method notation in object property definitions, 
// for both regular functions and generator functions.

// ECMAScript 6
obj = {
    foo(a, b) {
       //…
    },
    bar(x, y) {
       //…
    },
    *quux(x, y) {
        //…
    }
}
// ECMAScript 5
obj = {
    foo: function (a, b) {
        //…
    },
    bar: function (x, y) {
        //…
    },
    //  quux: no equivalent in ES5
    //…
};