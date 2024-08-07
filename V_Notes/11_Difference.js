// 1. difference between var, let, const and scope chain.

// var :  has function scope and can be redeclared and reassigned.
// let : has block scope and can be reassigned but not redeclared.
// const : has block scope and cannot be reassigned or redeclared.



// 2. Difference between == and === operators in JavaScript

// equality operator( == ) : is an equality operator that performs type coercion, 
// meaning it will attempt to convert the operands to the same type before comparing them.

// strict equality operator( === ) : is a strict equality operator that does not perform type coercion. 
// It checks both the value and the type of the operands.



// 3. Difference between "null" and "undefined" in JavaScript

// null :  represents the intentional absence of any object value.
let b = null;
console.log(b);    // null
console.log(typeof null); //object

// undefined :  represents the uninitialized value or absence of a value.
let a;
console.log(a);    // undefined



// 4. Difference between "function declaration" and "function expression" in JavaScript

// function declaration : Function declaration defines a named function using the function keyword.
function add(a, b) {
    return a + b;
}

// function expression : Function expression defines a function as part of an expression.
const subtract = function(a, b) {
    return a - b;
};



// 5. Difference between "map()" and "forEach()" methods in JavaScript

// map() : method creates a new array by calling a provided function on every element in the calling array.

// forEach() : method executes a provided function once for each array element.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2,4,6,8]
numbers.forEach(num => console.log(num)); // 1 2 3 4



// 6. Difference between "slice()" and "splice()" methods in JavaScript

// slice() : method returns a shallow copy of a portion of an array into a new array without modifying
// the original array. The slice() method selects from a given start, up to a (not inclusive) given end.
// array.slice(start, end)
const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 3); // Returns a new array: [2, 3]
console.log(slicedArray); 

// splice() : method changes the contents of an array by removing or replacing existing elements 
// and/or adding new elements in place.

// array.splice(index, count, item1, ....., itemX)
const splicedArray = array.splice(1, 2, 6, 7); // Modifies original array: [1, 6, 7, 4, 5]
console.log(splicedArray); 




// 7. difference b/w "shift()" and "unshift()"

// shift() :  Removes the first element from an array and returns that element.
// Modifies the original array by removing its first element.
const arr = [1, 2, 3, 4];
const firstElement = arr.shift();

console.log(firstElement); // Output: 1
console.log(arr); // Output: [2, 3, 4]

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// Modifies the original array by adding new elements to its beginning.
const newLength = arr.unshift(0, 1);
console.log(newLength); // Output: 5
console.log(arr); // Output: [0, 1, 2, 3, 4]



// 8. difference b/w map() , filter() , reduce().

// All Three methods in JavaScript are powerful array methods used to manipulate and transform arrays.

// map() : creates a new array with the same length from calling a function for every array element.
// The original array remains unchanged.
const number = [1, 2, 3, 4];
const doubledNumbers = number.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]
console.log(number);        // Output: [1, 2, 3, 4] (original array unchanged)

// filter() : creates a new array filled with elements that pass a test provided by a function.
// The original array remains unchanged.
const evenNumbers = number.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
console.log(number);     // Output: [1, 2, 3, 4] (original array unchanged)

// reduce() : Executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value. The original array remains unchanged.
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);     // Output: 10
console.log(number); // Output: [1, 2, 3, 4] (original array unchanged)




// 9. Difference between "debounce" and "throttle" functions in JavaScript:

// debounce : delays invoking a function until after a certain amount of time has elapsed 
// since the last time the function was invoked.
const debounceFn = debounce(() => console.log('Debounced'), 1000);
window.addEventListener('resize', debounceFn);

// throttle : limits the number of times a function can be called over time.
const throttleFn = throttle(() => console.log('Throttled'), 1000);
window.addEventListener('scroll', throttleFn);




// 10. Difference between "for...in" and "for...of" loops in JavaScript:
// Difference Summary:
// for...in loop is used to iterate over the keys (property names) of an object.
// for...of loop is used to iterate over the values of an iterable object like arrays, strings, etc.
// for...in iterates over object properties, including inherited ones, 
// while for...of does not iterate over object properties but directly over the iterable's elements.

// for...in : for...in loop iterates over the enumerable properties of an object.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key); // Output: a b c
}

// for...of : for...of loop iterates over the values of an iterable object like arrays, strings, etc.
const num = [1, 2, 3];
for (const value of num) {
    console.log(value); // Output: 1 2 3
}




// 11. Difference between "debouncing" and "throattling".

// Both techniques help improve performance and enhance the user experience by reducing the number of times
// functions are called in response to rapid-fire events.



// 1.Debouncing:

// Executes the function after a specified delay of inactivity.
// Useful for events where you want to wait until the user stops performing an action(e.g., typing, resizing).
// Example: Search input where the search function is called after the user stops typing.

// 2.Throttling:

// Executes the function at most once every specified interval.
// Useful for events where you want to limit the rate of function execution(e.g., scrolling, mouse movement).
// Example: Updating the position of an element on window scroll.




// 12. Difference between "Shallow Copy" and "Deep Copy". 

// Shallow Copy: Copies only the top-level properties. Nested objects/arrays are referenced, not copied. 
// Changes to nested structures affect the original.

// Deep Copy: Copies all levels, creating entirely new instances of nested objects/arrays. 
// Changes to nested structures do not affect the original.



// 13. Difference between controlled and uncontrolled components

// Controlled components are those where the form data is handled by the React component state. 
// In a controlled component, the form element's value is always driven by the React state. 
// This means that every state mutation will have an associated handler function.

// Characteristics:
// 1.Single Source of Truth: The form data is stored in the component’s state, 
// making it the single source of truth.
// 2.Easier to Handle Validation and Conditional Rendering: Since the state is always in sync with the input, 
// it’s easier to validate and render conditionally.
// 3.Immediate Feedback: The UI can provide immediate feedback based on the current state.


// Uncontrolled components are those where the form data is handled by the DOM itself. 
// In an uncontrolled component, you use a ref to get the form values from the DOM.
// Characteristics:
// 1.Less Boilerplate: No need to write event handlers for every input.
// 2.Direct Access to DOM: Access to the form values is via the DOM, which can be simpler for quick and dirty forms.
// 3.Use Cases: Often used when integrating with third-party libraries that manage their own state.