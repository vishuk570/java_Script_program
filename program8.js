// Write a function to check if a given number is prime.
// that number which is divide by 1 and itself.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function primeNumber(num){
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return "No";
    }
    return "Yes";
}

rl.question('Enter the Number:',(num)=>{
    num = parseInt(num)
    if(num <= 1){
        return "No"
    } else {
        const isPrime = primeNumber(num);
        console.log("isPrime",isPrime);
    }
})