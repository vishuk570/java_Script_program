// What is scope in JavaScript?
// What is the difference between global scope and local scope?
// How do closures work, and why are they important?



// Scope in JavaScript:
// In JavaScript, scope refers to the visibility and accessibility of variables within your code. 
// It determines where variables and functions are available for us.

// There are two main types of scope in JavaScript:
// 1. Global Scope
// 2. Local(Function) Scope

// 1. Global Scope: 
// Global Scope: Variables declared outside of any function, including at the top level of your JavaScript file, 
// have global scope. They can be accessed from anywhere in your code, including inside functions.

// 2. Local Scope:
// Local Scope: Variables declared inside a function have local scope. 
// They are only accessible within that function and cannot be accessed from outside.
// Variables declared with var, let and const are quite similar when declared inside a function.

// Global scope variable
var globalVariable = 'I am global';

function myFunction() {
    // Local scope variable
    var localVariable = 'I am local';
    
    console.log(globalVariable); // Accessible: 'I am global'
    console.log(localVariable); // Accessible: 'I am local'
}

console.log(globalVariable); // Accessible: 'I am global'
// console.log(localVariable); // Error: localVariable is not defined

myFunction(); // Outputs: 'I am global' and 'I am local'


// =================================================================================================

// JavaScript Variables: 
// In JavaScript, objects and functions are also variables.


