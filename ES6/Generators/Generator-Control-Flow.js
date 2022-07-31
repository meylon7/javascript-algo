// Generator Control-Flow
// Support for generators, a special case of Iterators where the control flow can 
// be paused and resumed, in order to support asynchronous programming in the style 
// of "co-routines" in combination with Promises (see below). 
// [Notice: the generic async function usually is provided by a reusable library and 
// given here just for better understanding. See co or Bluebird's coroutine in practice.]

//  application-specific asynchronous builder
function makeAsync(text, after) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), after)
    })
}

//  application-specific asynchronous procedure
async(function* (greeting) {
    let foo = yield makeAsync("foo", 300)
    let bar = yield makeAsync("bar", 200)
    let baz = yield makeAsync("baz", 100)
    return `${greeting} ${foo} ${bar} ${baz}`
}, "Hello").then((msg) => {
    console.log("RESULT:", msg) // "Hello foo bar baz"
})