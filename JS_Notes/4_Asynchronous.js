// 1. CallBack: is refer to "I will call back later!" 
//     - A callback is a function passed as an argument to another function.
//     - This technique allows a function to call another function.
//     - A callback function can run after another function has finished
    
// Function Sequence: JavaScript functions are executed in the sequence they are called.
//                    Not in the sequence they are defined.

function mySecond() {
    console.log("Goodbye");
}
function myFirst() {
    console.log("Hello");
}
  
myFirst();
mySecond();

// JavaScript Callbacks: A callback is a function passed as an argument to another function.

function myDisplayer(some) {
   console.log("some:" ,some);
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
  
myCalculator(5, 5, myDisplayer);

// In the example above, myDisplayer is a called a callback function.

// When you pass a function as an argument, remember not to use parenthesis.

// Right: myCalculator(5, 5, myDisplayer);

// Wrong: myCalculator(5, 5, myDisplayer());

// Where callbacks really shine are in asynchronous functions, 
// where one function has to wait for another function (like waiting for a file to load).

// ==============================================================================================

// 2. Asynchronous : is refer to "I will finish later!"
//                    - Functions running in parallel with other functions are called asynchronous
//                    - A good example in JavaScript setTimeout()

// Callback Alternatives : most modern asynchronous JavaScript methods don't use callbacks. 
//                         Instead, in JavaScript, asynchronous programming is solved using Promises.

// =================================================================================================

// 3. Promisses: is refer to "I Promise a Result!"
//                 - A Promise is an Object that links Producing code and Consuming code
//                 - "Producing code" is code that can take some time
//                 - "Consuming code" is code that must wait for the result

// Promise Object Properties: A JavaScript Promise object can be: myPromise.state          myPromise.result
//                                                              1. pendig                  undefined
//                                                              2. fulfilled               a result value
//                                                              3. rejected                an error object

//                            The Promise object supports two properties: 1. state and  2.result.


// ======================================================================================================

// 4. Async/Await: async and await make promises easier to write
//                 - async makes a function return a Promise
//                 - await makes a function wait for a Promise

// The keyword async before a function makes the function return a promise:

async function myFunction() {
    return "Hello";
}


// Is the same as:
function myFunction() {
    return Promise.resolve("Hello");
}


// Await Syntax : The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved
// promise before it continues:

let value = await promise;

async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
myDisplay();