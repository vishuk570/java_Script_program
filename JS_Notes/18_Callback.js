// callback:
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished.

function myDisplayer(sum) {   // callback function
    console.log(sum);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


// A callback function is a function passed as an argument into another function to be executed later. 
// Node.js heavily uses callbacks for handling asynchronous operations.