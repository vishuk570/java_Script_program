// JavaScript Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top.

// JavaScript Declarations are Hoisted
// If we are declare of any variable on the top thats call Hoisted

var x; // Declare x

var y; // Declare y
y = 5; // Assign 5 to y

// JavaScript Initializations are Not Hoisted

var x = 5; // Initialize x
var y = 7; // Initialize y

// ==================================================================================

// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.

carName = "Volvo";
let carName; // This will result in a ReferenceError:

// carName1 = "Volvo";
// const carName2; // This code will not run.