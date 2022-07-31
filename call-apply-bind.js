// JavaScript Function apply() method
// apply() method is used to call a function contains this value and an argument contains elements of an array. 
// Unlike call() method, it contains the single array of arguments.
// join arrays of same type
var array = [1, 2, 3, 4];
var newArray = [5, 6, 7, 8]
array.push.apply(array, newArray);
console.log(array); // [1,2,3,4,5,6,7,8]

// join array of different type
var array2 = [1, 2, 3, 4];
var newArray2 = ["One", "Two", "Three", "Four"]
array2.push.apply(array2, newArray2);
console.log(array2); // [ 1, 2, 3, 4, 'One', 'Two', 'Three', 'Four' ]

let sayHello = function (age, country) {
    console.log('Hello! My name is ' + this.name + ', I\`m ' + age + ' years old and I\'m from ' + country);
}
let david = {
    name: 'David'
}
sayHello.apply(david, [29, 'Germany']);

// JavaScript Function call() method
// call() method is used to call a function contains this value and an argument provided individually.
// Unlike apply() method, it accepts the argument list.
function Emp(id, name) {
    this.id = id;
    this.name = name;
}
function PermanentEmp(id, name) {
    Emp.call(this, id, name);
}
function TemporaryEmp(id, name) {
    Emp.call(this, id, name);
}
var p_emp = new PermanentEmp(101, "John Martin");
var t_emp = new TemporaryEmp(201, "Duke William")
console.log(p_emp.id + " " + p_emp.name);
console.log(t_emp.id + " " + t_emp.name);

// JavaScript Function bind() method
// bind() method is used to create a new function. 
// When a function is called, it has its own this keyword set to the provided value, 
// with a given sequence of arguments.
// Here, this refers to global "window" object  
this.name = "Oracle";
var website = {
    name: "JavaScript",
    getName: function () { return this.name; }
};

console.log(website.getName()); // JavaScript  

//It invokes at global scope  
var retrieveName = website.getName;
console.log(retrieveName());   //Oracle  

var boundGetName = retrieveName.bind(website);
console.log(boundGetName()); // JavaScript  