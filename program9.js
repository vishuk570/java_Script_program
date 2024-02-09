// Write a function to remove duplicates from an array.

// using inbuild method.
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

const newArr = removeDuplicates([1,2,2,4,5,6,3,5,5])
console.log(newArr); // Output: [1, 2, 4, 5, 6, 3]

// without using inbuild methods.

function removeDuplicatesNumber(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr2.indexOf(arr[i]) === -1) { // Check if element already exists in arr2
            arr2.push(arr[i]); // If not, push it to arr2
        }
    }
    return arr2;
}

const arr = removeDuplicatesNumber([1, 2, 2, 4, 5, 6, 3, 5, 5]);
console.log(arr); // Output: [1, 2, 4, 5, 6, 3]