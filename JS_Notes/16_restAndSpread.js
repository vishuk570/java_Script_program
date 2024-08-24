// Rest Operator :
// Rest operator use to Collects multiple elements or properties into a single array or object.
// Used in function parameters to gather all remaining arguments into an array or in object destructuring
// to gather remaining properties.


// 1.Function Parameters:
function sum(...numbers){
    console.log(numbers);
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4));

// 2.Object Destructuring:
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name , ...rest} = person

console.log(name); // Output: Alice
console.log(rest); // Output: { age: 25, city: 'Wonderland' }





// Spread Operator:
// Spread Operator Used to spread the elements of an array into another array or the properties
// of an object into another object.


// 1. Array Elements:
const x = [1,2,3]
const y = [...x, 4,5]
console.log(x);
console.log(y);

// 2. Object Properties:
const p = { name: 'Alice', age: 25 };
const newPerson = { ...p, city: 'Wonderland' };

console.log(newPerson); // Output: { name: 'Alice', age: 25, city: 'Wonderland' }


// 3. Function Argument
function add(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6