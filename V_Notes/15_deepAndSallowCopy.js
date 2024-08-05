// Shallow Copy:
// A shallow copy of an object or array copies the reference to the nested objects.
// Changes to the nested objects in the shallow copy will affect the original object as well.

// Methods to Create Shallow Copies:
// Arrays: Array.prototype.slice(), Array.prototype.concat(), Array.from(), spread operator [...array]
// Objects: Object.assign({}, object), spread operator {...object}


const arr1 = [1, 2, { a: 1, b: 2 }];
const shallowCopyArray = arr1.slice(); // Creating a shallow copy using slice()

shallowCopyArray[2].a = 99;

console.log(arr1); // Output: [1, 2, { a: 99, b: 2 }]
console.log(shallowCopyArray); // Output: [1, 2, { a: 99, b: 2 }]





// Deep Copy:
// A deep copy of an object or array copies all elements and nested objects or arrays,
// creating entirely new instances of each. 
// Changes to the nested objects in the deep copy will not affect the original object.


// Methods to Create Deep Copies:
// JSON Methods: JSON.stringify() and JSON.parse() (limitations with functions and undefined values)
// Lodash Library: _.cloneDeep()
// Manual Recursion: Writing a custom recursive function to copy objects and arrays

const arr2 = [1, 2, { a: 1, b: 2 }];
const deepCopyArray = JSON.parse(JSON.stringify(arr2)); // Creating a deep copy using JSON methods

deepCopyArray[2].a = 99;

console.log(arr2); // Output: [1, 2, { a: 1, b: 2 }]
console.log(deepCopyArray); // Output: [1, 2, { a: 99, b: 2 }]