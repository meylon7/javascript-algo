// Quicksort applies the divide and conquer technique as well. 
// It works by having a pivot element such that the elements to the left of it are less 
// than it and those to the right are greater than it. 
// The pivot element can be any element in the array.
// 1. Select a pivot element.
// 2. Split the array into two arrays with those less than the pivot element on the left 
//    and those greater than the pivot element to the right.
// 3. Carry out the above steps recursively until we have subarrays of length 1. 
//    Combine the subarrays to yield a sorted array.
function partition(items, left, right) {
    //rem that left and right are pointers.
    let pivot = items[Math.floor((right + left) / 2)],
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        //increment left pointer if the value is less than the pivot
        while (items[i] < pivot) {
            i++;
        }
        //decrement right pointer if the value is more than the pivot
        while (items[j] > pivot) {
            j--;
        }

        //else we swap.
        if (i <= j) {
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j--;
        }
    }
    //return the left pointer
    return i;
}
function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //get the left pointer returned
        if (left < index - 1) {
            //more elements on the left side
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side
            quickSort(items, index, right);
        }
    }
    return items; //return the sorted array
}
let items = [5, 3, 7, 6, 2, 9];
console.log(quickSort(items, 0, items.length - 1));
