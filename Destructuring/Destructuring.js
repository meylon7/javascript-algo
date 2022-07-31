const colors = ["blue", "red", "yellow", "pink"];
//const [blueColor, redColor] = colors;
//const [blueColor,, yellowColor] = colors;
const [blueColor, redColor, ...rest] = colors;

const person = {
  firstname: "John",
  lastname: "Doe",
  age: "38"
}

const { firstname, lastname } = person;
const { firstname: personFirstName } = person;

console.log(personFirstName)