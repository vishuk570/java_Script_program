// Reverse a String 
// input = "Hello World"
// output = "dlroWolleH"

// this is using inbuild function.
// function reverseString(str){
//     // convert string to array => split
//     // convert array to string => join
//     const strr = str.split('').reverse().join('').replace(' ','');
//     return strr
// }
// const result = reverseString("Hello World");
// console.log(result);
// --------------------------------------

// without using inbuild function.
function reverseString(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            reversed += str[i];
        }
    }
    return reversed;
}
const result = reverseString("Hello World");
console.log("result",result);
