// function Currying
function multiply(a, b) {
    return a*b
}

let multiByTwo = multiply.bind(this,2)
console.log(multiByTwo(4))

let multiByTen = multiply.bind(this,10)
console.log(multiByTen(4))