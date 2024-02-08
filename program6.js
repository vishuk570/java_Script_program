// Find the Longest Word:
// Write a function that takes a sentence and returns the longest word. => function,sentence (8)

function longestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
}

const longestWords = longestWord("Write a function that takes a sentence and returns");
console.log(longestWords); // function

// ==============================================================================================

// Explain and difference between map reduce and filter in javascript.

// 1. The map() method is used for creating a new array from an existing one, 
//     applying a function to each one of the elements of the first array.

    // var new_array = arr.map(function callback(element, index, array) {
    //     // Return value for new_array
    // })

    
// Exapmle:-> In the following example, each number in an array is doubled.

const number1 = [1, 2, 3, 4];
const doubled = number1.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// ================================================================================

// 2. The filter() method takes each element in an array and it applies a conditional statement against it.
//    If this conditional returns true, the element gets pushed to the output array. 
//    If the condition returns false, the element does not get pushed to the output array.

        // var new_array = arr.filter(function callback(element, index, array) {
        //     // Return true or false
        // })

const number2 = [1, 2, 3, 4];
const evens = number2.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

// ==========================================================================================

// 3. The reduce() method reduces an array of values down to just one value. 
//    To get the output value, it runs a reducer function on each element of the array.

        // arr.reduce(callback[, initialValue])

const number3 = [1, 2, 3, 4];
const sum = number3.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

