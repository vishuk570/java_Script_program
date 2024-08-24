//  Check for Palindrome
//  Palindrome is a number (such as 16461,141) 
//  that remains the same when its digits are reversed.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(num) {
    let num1 = 0;
    let num2 = 0;
    while (num > 0) {
        num1 = num % 10;
        num2 = (num2 * 10) + num1;
        num = Math.floor(num / 10);
    }
    return num2;
}
rl.question('Enter the Number: ',(num)=>{
    num = parseInt(num);
    if(!isNaN(num)){
        const result = isPalindrome(num);
        console.log(result);
        if(result == num){
            console.log("Yes");
        } else {
            console.log("No");
        }
    } else {
        console.log("Invalid input. Please enter valid numbers.");
    }
    
})
