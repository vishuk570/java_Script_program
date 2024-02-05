// Factorial of a Number without recursion.

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorialNumber(num) {
    let num1 = 1;
    while (num > 0) {
        num1 = num1 * num;
        num = num - 1;
    }
    return num1;
}

rl.question('Enter the Number: ', (num) => {
    num = parseInt(num);
    if (num == 0) {
        console.log(num);
    } else {
        const result = factorialNumber(num);
        console.log(result);
    }
})