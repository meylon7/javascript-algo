// Iterator & For-Of Operator
// Support "iterable" protocol to allow objects to customize their iteration behaviour. 
// Additionally, support "iterator" protocol to produce sequence of 
// values (either finite or infinite). Finally, 
// provide convenient of operator to iterate over all values of an iterable object.

let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1
        return {
            next() {
                [pre, cur] = [cur, pre + cur]
                return { done: false, value: cur }
            }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}