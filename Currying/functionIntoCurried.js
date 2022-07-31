// Without currying
function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(2, 5, 8));  

// After Currying
function multiply(a) {  
    return function(b) {  
       return function(c) {  
          return a * b * c;  
       }  
    }  
 }  
 console.log(multiply(2)(5)(8));  