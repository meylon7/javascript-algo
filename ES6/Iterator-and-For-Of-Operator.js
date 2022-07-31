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

// For Loop // time and space complexity is O(n).
const fibonacciForLoop = n => {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
};

// For Loop With Array - time and space complexity is O(n).
const fibonacciForLoopWithArray = (n) => {
    if (n <= 1) {
        return n;
    }

    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }

    return result[result.length - 1];
}

// Recursive Solution - The space complexity is O(n).
// The time complexity for this solution is exponential - O(2^n), 
// which is quite high, so we definitely need to do some optimizations.
const fibonacciRecursive = n => {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// Optimized Recursive Solution
let cache = {};

const fibonacciOptimizedRecursive = n => {
    if (n <= 1) {
        return n;
    }
    if (cache[n]) {
        return cache[n];
    }
    const result = fibonacciOptimizedRecursive(n - 1) + fibonacciOptimizedRecursive(n - 2);
    cache[n] = result;
    return result;
};

// Find Index Of A Given Fibonacci Number
const getFibonacciIndex = n => {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1, c = 1, result = 1;
    while (c < n) {
        c = a + b;
        a = b;
        b = c;
        result++;
    }
    return result;
};

// Recursive Algorithm with Memoization
function fibonacciMemoization(element, cache = []) {
    if (element === 0) return 0;
    if (element === 1) return 1;
    if (cache[element]) return cache[element];
    
    cache[element] = fibonacciMemoization(element - 2, cache) + fibonacciMemoization(element - 1, cache);
    return cache[element];
}

// Iterative Algorithm
function fibonacciIterative(element) {
    const sequence = [0, 1];
    for (i = 2; i <= element; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[element];
}
console.log(fibonacciIterative(7))