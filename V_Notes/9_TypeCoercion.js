// Type Coercion : 
// Type Coercion refers to the process of automatic or implicit conversion
//  of values from one data type to another. 

// This includes conversion from Number to String, String to Number, Boolean to Number, etc.
// when different types of operators are applied to the values.

// ===================================================================
// 1. Number to String

// When any string or non-string value is added to a string, 
// it always converts the non-string value to a string implicitly

let x = 10 + "10"
let y = "10" + 10
let z = true + "10"
console.log(x , y, z);                       // 1010 1010 true10
console.log(typeof x , typeof y, typeof z);  // string string string


// ============================================================
// 2. String to Number

// The string '5' is converted to number 5 in all cases implicitly
let a = 10 - '5';
let b = 10 * '5';
let c = 10 / '5';
let d = 10 % '5';
 
console.log(a);  // 5
console.log(b);  // 50
console.log(c);  // 2
console.log(d);  // 0
console.log(typeof a, typeof b, typeof c, typeof d); // number number number number


// ==================================================================
// 3. Boolean to Number

// The Boolean value true is converted to number 1 and then operation is performed
let e  = true + 2;
 
// The Boolean value false is converted to number 0 and then operation is performed
let f = false + 2;
 
console.log(e, f);               // 3 2

console.log(typeof e, typeof f); // number number
