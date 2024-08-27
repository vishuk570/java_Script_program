// this :
// The 'this' keyword is a special object that refers to the context in which a function is executed.

// The this keyword refers to different objects depending on how it is used:


// 1. Global Context(outside of any function):
console.log(this);  // In a browser, this will log the window object


// 2. Inside a Function:
function showThis() {
    console.log(this);
  }
showThis();  // Logs the global object (window in browsers)

'use strict';
function showThiss() {
  console.log(this);
}
showThiss();  // Logs undefine


// 3. Inside a Method (Object Context):
const person = {
    name: 'Alice',
    greet: function() {
      console.log(this.name);
    }
  };
  person.greet();  // Logs 'Alice', because this refers to the person object


//   4. Inside a Constructor Function:
// this refers to the new instance of the object that is being created.
function Person(name) {
    this.name = name;
  }
const alice = new Person('Alice');
console.log(alice.name);  // Logs 'Alice'


// 5. Arrow Functions:
// Arrow functions do not have their own this context
// Instead, they inherit this from the surrounding (lexical) context
const personn = {
    name: 'Alice',
    greet: function() {
      const innerGreet = () => {
        console.log(this.name);
      };
      innerGreet();
    }
  };
personn.greet();  // Logs 'Alice', because arrow functions inherit this from greet()


// 6. Event Handlers:
// this typically refers to the DOM element that is handling the event.
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this);  // Logs the button element
});



// 7. Explicit Binding with call, apply, and bind
// You can explicitly set the value of this using call, apply, or bind
function greet() {
    console.log(this.name);
}
  
const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };
  
greet.call(person1);  // Logs 'Alice'
greet.apply(person2);  // Logs 'Bob'
  
const greetBob = greet.bind(person2);
greetBob();  // Logs 'Bob'



//   Summary
//   Global context: this refers to the global object (window in browsers).
//   Regular function: this refers to the global object (or undefined in strict mode).
//   Object method: this refers to the object that owns the method.
//   Constructor function: this refers to the newly created object.
//   Arrow function: this inherits from the surrounding lexical context.
//   Event handler: this refers to the element that triggered the event.
//   Explicit binding: You can control this using call, apply, and bind.