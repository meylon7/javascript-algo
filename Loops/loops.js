// The For In Loop
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}
// The JavaScript for in statement can also loop over the properties of an Array:
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x];
}

// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.
const numbers2 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers2.forEach(myFunction);

function myFunction(value, index, array) {
    txt2 += value;
}

// For Of Loop
const cars = ["BMW", "Volvo", "Mini"];

let text3 = "";
for (let x of cars) {
    text3 += x;
}