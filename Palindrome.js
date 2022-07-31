function isPalindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

console.log(isPalindrome('Top 10 JavaScript Interview Questions')) // false
console.log(isPalindrome("abba")) // true

// checks whether number is palindrome
function checkPalindrome(num) {
    var numString = num.toString();
    return numString.split("").reverse().join("") == numString;
}

if (checkPalindrome(123321)) {
    console.log("Is a palindrome");
} else {
    console.log("Not a palindrome");
}