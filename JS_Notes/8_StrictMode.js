// Use Strict : Defines that JavaScript code should be executed in "strict mode".

// Declaring Strict Mode: 
//           Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

"use strict";
x = 3.14;       // This will cause an error because x is not declared

// ------------------------------------------------------------------------------------------------------

"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

// ------------------------------------------------------------------------------------------------------


x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

// ------------------------------------------------------------------------------------------------------

// Why Strict Mode?

// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.