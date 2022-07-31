const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  console.log(ages.find(checkAge)) // 33  returns the value of the first element that passes a test.
}

myFunction()
