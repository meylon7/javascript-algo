// JavaScript Async/Await
// Async/Await is an extension of promises - promise-based behavior
function myPlayer(some) {
    document.getElementById("main").innerHTML = some;
}

async function myFirstFunction() {
    return Promise.resolve("Hello World");
}
myFirstFunction().then(
    function (value) { myPlayer(value); },
    function (error) { myPlayer(error); }
);
// Await function works only inside the async function  
async function f() {
    try {
        let response = await fetch('http://no-url');
    } catch (err) {
        alert(err); // TypeError: failed to fetch  
    }
}
f();  