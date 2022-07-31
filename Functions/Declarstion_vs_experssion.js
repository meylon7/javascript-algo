logHello();

// function declaration - load before any code executed
function logHello(){
    console.log('Hello')
}

// function expression - like a variable declaration
const logHello = () => {
    console.log('Hello')
}