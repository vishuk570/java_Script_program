// Direct Recursion.

// Example 1: Number Countdown (n number)

function recursion(n){
    if(n===1){
        console.log(1);
        return;
    } 
    console.log(n);
    recursion(n-1);
}
recursion(10);

// Example 2: String Reversal
function stringReverse(str){
    if(str.length === 1){
        return str;
    } else {
        return str.slice(-1) + stringReverse(str.slice(0, -1));
    }
} 
console.log(stringReverse('HelloWorld')); 


// Example 3: Finding Exponential of Numbers

function exponential(num, power){
   
    if (power == 1){
        return num;
    }
    else {
        return num * exponential(num, power - 1);
    }
}
 
console.log(exponential(3,4)); 

// Example 4: Finding Factorial of Numbers
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1)
}

console.log(factorial(6));