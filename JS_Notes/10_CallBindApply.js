// 1. What is function defination?
// JavaScript functions are defined with the function keyword.
// we can use a function declaration or a function expression.


// 2. What is difference between function declaration and function expression.

// Function Declaration: 
function functionName(parameters) {
    // code to be executed
}
// Declared functions are not executed immediately. 
// They are "saved for later use", and will be executed later, when they are invoked.


// Function Expression (a function without a name): 
// A function expression can be stored in a variable
const x = function (a, b) {return a * b};
let z = x(4, 3); // return 12
// Functions stored in variables do not need function names. 
// They are always invoked (called) using the variable name.


// 3. The Function() Constructor:
// The functions can also be defined with a built-in JavaScript function constructor called Function()
const myFunction = new Function("a", "b", "return a * b");
let y = myFunction(4, 3); // return 12
// Most of the time, we can avoid using the new keyword in JavaScript.
const myFunction2 = function (a, b) {return a * b};
let y2 = myFunction(4, 3); // return 12



// 4.Function Hoisting:
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.
myFunction(5);

function myFunction(y) {
  return y * y;
}

// Note: Functions defined using an expression are not hoisted.


// 5. Self-Invoking Functions:
(function () {
    let x = "Hello!!";  // I will invoke myself
})();


// =====================================================================================================

// call():
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
  
  // This will return "John Doe":
person.fullName.call(person1);

  // This will return "Mary Doe"
person.fullName.call(person2);


// Apply();
// The apply() method is similar to the call() method (previous chapter).
// This will return "Mary Doe":
person.fullName.apply(person1);

// The difference is:

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.


// Bind(): Function Borrowing
// With the bind() method, an object can borrow a method from another object.
const person3 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person3.fullName.bind(member); // Hege Nilsen

