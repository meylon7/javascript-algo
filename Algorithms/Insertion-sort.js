// Insertion sort uses the recursion technique. 
// There is a portion of the array that is sorted and the other that is unsorted. 
// So you have to compare the elements from the unsorted portion one by one and insert 
// them into the sorted portion in the correct order. 
// In the guide below we are using ascending order.

// 1. Start by comparing the second element of the array with the first element 
// 2. Iterate through comparing the first element with each element of the unsorted portion.
// 3. After iterating through the entire array, increment the sorted portion to the next 
// index and recursively compare the value of the last index of the sorted portion with 
// each value of the unsorted portion. 
// Swap where the value of the unsorted portion is smaller.
function insertionSort(arr) {
    //Start from the second element.
    for (let i = 1; i < arr.length; i++) {
        //Go through the elements behind it.
        for (let j = i - 1; j > -1; j--) {
            //value comparison using ascending order.
            if (arr[j + 1] < arr[j]) {
                //swap
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    };
    return arr;
}
console.log(insertionSort([23, 1, 10, 5, 2]));