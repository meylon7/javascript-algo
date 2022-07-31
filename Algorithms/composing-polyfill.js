function addFive(a){
    return a + 5
}

function subtractTwo(a){
    return a - 2
}

function multiplyFour(a){
    return a * 4
}

const compose = (...func) => {
    return (args) => {
       return func.reduceRight((arg,fn)=> fn(arg), args)
    }
}

const evaluate = compose(addFive,subtractTwo,multiplyFour) 

console.log(evaluate(5))