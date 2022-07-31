// Generator Matching
// Support for generator functions, i.e., functions where the control flow can be paused 
// and resumed, in order to produce and spread sequence 
// of values (either finite or infinite).
let fibonacci = function* (numbers) {
    let pre = 0, cur = 1
    while (numbers-- > 0) {
        [pre, cur] = [cur, pre + cur]
        yield cur
    }
}

for (let n of fibonacci(1000))
    console.log(n)

let numbers = [...fibonacci(1000)]

let [n1, n2, n3, ...others] = fibonacci(1000)

//  no equivalent in ES5