// Selection Sort : 
// The Selection Sort algorithm finds the lowest value in an array and 
// moves it to the front of the array.

// How it works:

// 1. Go through the array to find the lowest value.
// 2. Move the lowest value to the front of the unsorted part of the array.
// 3. Go through the array again as many times as there are values in the array.

function selectionSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];  
            arr[i] = temp;
                    //  [arr[i], arr[minIndex]] = 
                    // [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSortFun(arr)); 