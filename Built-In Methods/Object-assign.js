// Object Property Assignment
// New function for assigning enumerable properties of one or more source objects 
// onto a destination object.

// The Object.assign() copies all enumerable and own properties from the 
// source objects to the target object. It returns the target object.
let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget); // { color: 'red' }

let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox); // { height: 10, width: 20, color: 'Red', borderStyle: 'solid' }

// If the source objects have the same property, 
// the property of the later object overwrites the earlier one:
let box2 = {
    height: 10,
    width: 20,
    color: 'Red'
};

let style2 = {
    color: 'Blue',
    borderStyle: 'solid'
};

let styleBox2 = Object.assign({}, box2, style2);

console.log(styleBox2); // { height: 10, width: 20, color: 'Blue', borderStyle: 'solid' }