const numbers = [1800, 50, 300, 20, 100];

// subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100
let subtract = numbers.reduce(
    (accumulator, currentValue) => accumulator - currentValue
);
console.log(subtract); // 1330

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// function that subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
let remaining = expenses.reduce(
    (accumulator, currentValue) => accumulator - currentValue,salary);
    
console.log(remaining); // 2700