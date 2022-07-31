// function Currying
function multiply(a, b) {
    return a * b
}

let multiByTwo = multiply.bind(this, 2)
console.log(multiByTwo(4))

let multiByTen = multiply.bind(this, 10)
console.log(multiByTen(4))

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));

function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6

const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
log(result); // 6

function volume(l) {
    return (w) => {
        return (h) => {
            return l * w * h
        }
    }
}
const aCylinder = volume(100)(20)(90) // 180000