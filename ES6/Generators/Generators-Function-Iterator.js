// Generator Function, Iterator Protocol
// Support for generators, a special case of Iterators containing a generator function, 
// where the control flow can be paused and resumed, in order to produce 
// sequence of values (either finite or infinite).

// ECMAScript 6
let fibonacci = {
    *[Symbol.iterator]() {
        let pre = 0, cur = 1
        for (; ;) {
            [pre, cur] = [cur, pre + cur]
            yield cur
        }
    }
}
for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}
// ECMAScript 5
var fibonacci2 = {
    next: (function () {
        var pre = 0, cur = 1;
        return function () {
            tmp = pre;
            pre = cur;
            cur += tmp;
            return cur;
        };
    })()
};

var n;
for (;;) {
    n = fibonacci2.next();
    if (n > 1000)
        break;
    console.log(n);
}