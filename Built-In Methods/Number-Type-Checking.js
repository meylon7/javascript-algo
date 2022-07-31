Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true

// ECMAScript 5
var isNaN = function (n) {
    return n !== n;
};
var isFinite = function (v) {
    return (typeof v === "number" && !isNaN(v) && v !== Infinity && v !== -Infinity);
};
isNaN(42) === false;
isNaN(NaN) === true;

isFinite(Infinity) === false;
isFinite(-Infinity) === false;
isFinite(NaN) === false;
isFinite(123) === true;