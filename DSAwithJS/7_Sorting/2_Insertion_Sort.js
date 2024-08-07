// Insertion Sort
// The Insertion Sort algorithm uses one part of the array to hold the sorted values, 
// and the other part of the array to hold values that are not sorted yet.

// The algorithm takes one value at a time from the unsorted part of the array 
// and puts it into the right place in the sorted part of the array, until the array is sorted.


// How it works:

// 1. Take the first value from the unsorted part of the array.
// 2. Move the value into the correct place in the sorted part of the array.
// 3. Go through the unsorted part of the array again as many times as there are values.
function insertionSortFun(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSortFun(arr));