// 1. Reverse a String With Built-In Functions
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

// 2. Reverse a String With a Decrementing For Loop
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

// 3. Reverse a String With Recursion
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");