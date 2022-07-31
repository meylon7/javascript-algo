// Generator Function, Direct Use
// Support for generator functions, a special variant of functions where the control 
// flow can be paused and resumed, in order to produce sequence of 
// values (either finite or infinite).
function* range(start, end, step) {
    while (start < end) {
        yield start // yield is used to pause the execution of a function
        start += step
    }
}

for (let i of range(0, 10, 2)) { // 0 = start, 10 = end, 2 = step
    console.log(i) // 0, 2, 4, 6, 8
}
// yield is used to pause the execution of a function. 
//When the function is invoked again, the execution continues from the 
// last yield statement. A generator returns a generator object, which is an iterator. 
// This object generates one value at a time and then pauses execution

// ECMAScript 5 
function range2(start, end, step) {
    var list = [];
    while (start < end) {
        list.push(start);
        start += step;
    }
    return list;
}

var r = range2(0, 10, 2);
for (var i = 0; i < r.length; i++) {
    console.log(r[i]); // 0, 2, 4, 6, 8
}

// --------------------
function* generator(i) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
  // expected output: 20