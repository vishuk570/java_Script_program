// JavaScript String Search

// String indexOf()
// String lastIndexOf()
// String search()

// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

// =================================================================================================

// 1.String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string,
// or it returns -1 if the string is not found:

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index); // 7

// 2.String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.lastIndexOf("locate");
console.log(index1); // 21

// 3.String search()
// The search() method searches a string for a string (or a regular expression)
//  and returns the position of the match:

let text2 = "Please locate where 'locate' occurs!";
let result = text2.search("locate");
console.log(result); // 7

// The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// 4.String match()
// The match() method returns an array containing the results of matching 
// a string against a string (or a regular expression).  its case sensitive

let text3 = "The rain in SPAIN stays mainly in the plain";
let matches = text3.match(/ain/gi);
console.log("String Match",matches); 
let matchAll = text3.matchAll('rain');
console.log(matchAll);

// 5.String includes()
// The includes() method returns true if a string contains a specified value. 
// Otherwise it returns false.
// includes() is case sensitive.
// includes() is an ES6 feature.
// includes() is not supported in Internet Explorer.

let text4 = "Hello world, welcome to the universe.";
let isInclude = text4.includes("world");
console.log(isInclude);

// 6.String startsWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:
// startsWith() is case sensitive.
// startsWith() is an ES6 feature.
// startsWith() is not supported in Internet Explorer.

let text5 = "Hello world, welcome to the universe.";
let startsWith1 = text5.startsWith("Hello"); // true
let startsWith2 = text5.startsWith("world"); // false
let startsWith3 = text5.startsWith("world", 6) // true
console.log(startsWith1,startsWith2,startsWith3);

// 7.String endsWith()
// The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:

let text6 = "John Doe";
let endsWith1 = text6.endsWith("Doe");
console.log(endsWith1); // true


let text7 = "Hello world, welcome to the universe.";
let endsWith2 = text7.endsWith("world", 11);
console.log(endsWith2); // true