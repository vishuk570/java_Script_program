// String Methods: 

// Javascript strings are primitive and immutable
// All string methods produces a new string without altering the original string.
// All string methods return a new string. They don't modify the original string.
// Strings are immutable: Strings cannot be changed, only replaced.

// String length : return length
// String charAt() : return char on index
// String charCodeAt() : return code of character on index
// String at() : return char on index
// String [ ] : return char on index
// String slice()  
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()


// 1.String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log('length',length); // 26

// ====================================================================================================

// Extracting String Characters: There are 4 methods for extracting string characters:
// 2.String charAt()
let str1 = "HELLO WORLD";
let char = str1.charAt(0);
console.log('charAt(0)',char); // H

// 3.String charCodeAt() 
let str2 = "HELLO WORLD";
let char1 = str2.charCodeAt(0);
console.log('charAt(0)',char1); // returns the code of the character 72

// 4.String at() : ES2022 introduced the string method at()
const name = "W3Schools";
let letter = name.at(2);
let letter2 = name[2]
console.log('at(0)',letter,letter2); // S S

// 5.String [ ]
let txt = "HELLO WORLD";
let char2 = txt[0];
console.log('[]',char2); // H

// =====================================================================================================

// Extracting String Parts: There are 3 methods for extracting a part of a string:

// 6.String slice(start,end) : extracts a part of a string and returns the extracted part in a new string.
let fruits = "Apple, Banana, Kiwi";
// let part1 = fruits.slice(7, 13);
// let part2 = fruits.slice(7);
// let part3 = fruits.slice(-12);
let part4 = fruits.slice(-12,-6);
console.log('slice',part4);

// 7.String substring(start,end):  is similar to slice()
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);


// 8.String substr(start,length): is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let strr = "Apple, Banana, Kiwi";
let partt = strr.substr(7, 7);
console.log(partt);

// ===================================================================================================

// Converting to Upper and Lower Case
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log("toUpperCase",text2);
let text3 = text2.toLowerCase()
console.log(text3);

// String concat()
let text4 = "Hello";
let text5 = "World";
let text6 = text4.concat(" ", text5)
console.log(text6);

// ===================================================================================================

// String trim(): The trim() method removes whitespace from both sides of a string
let text7 = "      Hello World!      ";
console.log("text7 length: ", text7.length);

let text8 = text7.trim();
console.log("trim",text8, text8.length);

// String trimStart(): The trimStart() method works like trim(), but removes whitespace only from the start of a string

let text10 = text7.trimStart();
console.log("trim",text10, text10.length);

// String trimEnd(): The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text12 = text7.trimEnd();
console.log("trim",text12, text12.length);

// =====================================================================================================

// JavaScript String Padding: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// 1.String padStart(): The padStart() method pads a string from the start.
//   It pads a string with another string (multiple times) until it reaches a given length

let text13 = "5";
let padded = text13.padStart(4,"x");
console.log(padded); // xxx5

// 2.String padEnd(): The padEnd() method pads a string from the end.
//   It pads a string with another string (multiple times) until it reaches a given length.
let text14 = "5";
let paddeds = text14.padEnd(4,"y");
console.log(paddeds); // 5yyy

// =======================================================================================================

// String repeat(): 
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

let text15 = "Hello world!";
let result = text15.repeat(1);
console.log(result);

// Replacing String Content : The replace() method replaces a specified value with another value in a string:
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// By default, the replace() method is case sensitive.

let text16 = "Please visit Microsoft!";
let newText = text16.replace("Microsoft", "Google");
console.log(newText);

// ======================================================================================================

// Converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.
// A string can be converted to an array with the split() method:
let string = 'abcdefgh';
let convertToArray = string.split('');
console.log(convertToArray);