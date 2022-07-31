let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let duplicate = []
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    } else {
        duplicate.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]
console.log(duplicate);