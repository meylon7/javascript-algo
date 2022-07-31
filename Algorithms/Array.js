const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push adds a new element to an array (at the end)
strings.push('e'); 

//pop removes the last element from an array
//The pop() method returns the value that was "popped out":
strings.pop();
strings.pop();

// The shift() method removes the first array element and "shifts" all other elements to a lower index
// The shift() method returns the value that was "shifted out":
//unshift adds a new element to an array (at the beginning), and "unshifts" older elements
strings.unshift('x') // returns the new array length

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
strings.splice(2, 0, 'alien');

// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
// The concat() method creates a new array by merging (concatenating) existing arrays
console.log(strings)