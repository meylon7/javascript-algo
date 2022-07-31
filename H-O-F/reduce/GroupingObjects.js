let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
        let key = currentObject[property];
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentObject);
        return accumulator;
    }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);