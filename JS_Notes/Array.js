// The Array object is used to store multiple values in a single variable.
let a = [];
console.log(typeof a); // object

const cars = ["Saab", "Volvo", "BMW"]; // Create an Array
// The [ ] constructor creates a new array object.

// Create an array with the new Array() method:
const car = new Array()
const carss = new Array("Saab", "Volvo", "BMW");
console.log(car); // return []
console.log(carss);


// Array Methods.

// 1. at() : Returns an indexed element of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(2));

// 2. concat() : Joins arrays and returns an array with the joined arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);

// 3. constructor : Returns the function that created the Array prototype
let text = fruits.constructor;
console.log(text); // [Function: Array]

// 4. copyWithin() : Copies array elements within the array, to and from specified positions
let copy =  fruits.copyWithin(2, 0);
console.log(copy); // [ 'Banana', 'Orange', 'Banana', 'Orange' ]

// 5. entries() : Returns a key/value pair Array Iteration Object
// Create an Iterator
const list = fruits.entries();
console.log(list);
// List the Entries
let txt = "";
for (let x of list) {
  txt += x + '\n';
}

console.log(txt);


// =================================================================================================

// Some Important method.

// 6. every() : Checks if every element in an array pass a test , return true  and false
const ages = [32, 33, 16, 40];

function checkAge(age) {
    return age > 15;
}
// Are all ages over 18?
console.log(ages.every(checkAge)); // true

// 7. some() : Checks if any of the elements in an array pass a test
function checkAdult(age) {
    return age > 18;
  }
console.log(ages.some(checkAdult)); // true


// 8. slice() : Selects a part of an array, and returns the new array
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(1, 4);
const myBest = fruit.slice(-3, -1);
console.log(citrus);
console.log(myBest);

// 9. splice() : Adds or Removes array elements. and overwrites the original array.
// At position 2, add "papaya" and "Kiwi":
fruit.splice(2, 0, "papaya", "Kiwi");
console.log("Splice1",fruit);

// At position 2, remove 2 items
fruit.splice(2, 2);
console.log("Splice2",fruit);


// 10. shift() : Removes the first element of an array, and returns that element.
fruit.shift();
console.log("shift", fruit);

// 11. unshift() : Adds new elements to the beginning of an array, and returns the new length
fruit.unshift("Lemon","Pineapple");
console.log("unshift",fruit);

// 12. push() : Adds new elements to the end of an array, and returns the new length
// 13. pop() : Removes the last element of an array, and returns that element\


// 14. keys() : Returns a Array Iteration Object, containing the keys of the original array
// Create an Array
const mobile = ["apple", "redmi", "oppo", "vivo"];

// Create an Iterable
const itemList = mobile.keys();
// List the Keys
let item = "";
for (let x of itemList) {
  item += x + '\n';
}

console.log(item);

// =======================================================================================

// Difference b/w Map, filter, reduce

// 15. map() : Creates a new array with the result of calling a function for each array element
const numbers = [4, 9, 16, 25];

const newArr = numbers.map(Math.sqrt)
console.log("newArr",newArr); // [ 2, 3, 4, 5 ]

// 16. filter() : Creates a new array with every element in an array that pass a test
function checkAdults(age) {
    return age >= 18;
  }
const result = numbers.filter(checkAdults);
console.log("result",result);


// 17. reduce() : Reduce the values of an array to a single value (going left-to-right)
function getSum(total, num) {
    return total + Math.round(num);
}
const sum = numbers.reduce(getSum)
console.log(sum);

// ======================================================================================