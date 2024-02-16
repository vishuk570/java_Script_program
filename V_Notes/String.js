// String: A JavaScript string is zero or more characters written inside quotes.
//         - Strings are for storing text
//         - Strings are written with quotes

// We can use single or double quotes: 
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

// --------------------------------------------------------------------------------

// Template Strings: Templates were introduced with ES6 (JavaScript 2016).
//                   Templates are strings enclosed in backticks (`This is a template string`).
//                   Templates allow single and double quotes inside a string:

let text = `He's often called "Johnny"`; // Templates are not supported in Internet Explorer.

// ===============================================================================================


// 1.String length : To find the length of a string, use the built-in length property:
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;
console.log("length",length);

// 2.Escape Characters : Because strings must be written within quotes, JavaScript will misunderstand this string:
// let text = "We are the so-called "Vikings" from the north."; //give error

// To solve this problem, we can use an backslash escape character.

let str1 = "We are the so-called \"Vikings\" from the north.";
let str2= 'It\'s alright.';
let str3 = "The character \\ is called backslash.";

// 3. Breaking Long Lines: A safe way to break up a string is by using string addition:

let str4 = "Hello " +
"Dolly!";
console.log("str4:",str4);

let str5 =
`The quick
brown fox
jumps over
the lazy dog`;

console.log("str5:",str5)

// ================================================================================================

// JavaScript Strings as Objects:
// Normally, JavaScript strings are primitive values, created from literals:

let x = "John";
// But strings can also be defined as objects with the keyword new:
let y = new String("John");
let z = x == y;
console.log(x,y,z);