// Bubble sort - recursion technique
// Start by comparing the first two elements in an array.
// Swap them if required.
// Continue till the end of the array. At this point, 
// you have made a series of inner passes and completed an outer pass.
// Repeat the process until the entire array is sorted.

let arr = [8, 9, 5, 6, 1, 3, 4, 2, 7, 4, 7, 2]
function bubbleSort(arr) {
    //Outer pass
    for (let i = 0; i < arr.length; i++) {
        //Inner pass
        for (let j = 0; j < arr.length - i - 1; j++) {
            //Value comparison using ascending order
            if (arr[j + 1] < arr[j]) {
                //Swapping
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort(arr));

function bubbleSort2(array){
    const arr = array.slice()
    for(let i = 0; i < arr.length-1; i++) { 
        for(let j = 0; j < arr.length - 1 - i; j++) {
           if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
           }
        }
    }
    return arr
}
console.log(bubbleSort2([1,4,2,8,345,123,43,32,5326,63,43,2,55,1,234,92]))

// Bubble sort has the following performance cases:
// Worst-case time complexity: Big O (n^2).
// Average-case time complexity: Big theta (n^2).
// Best-case time complexity: Big omega (n).
// Space complexity: Big O (1).


