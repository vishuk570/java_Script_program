// Write program Add Tow Number
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function Add two number
function Add(a,b){
    return a+b;
}

// Take input for the first number
rl.question('Enter the firts Number:',(num1)=>{
    // Take input for the Second number
    rl.question('Enter the second Number',(num2)=>{
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Check if the inputs are valid numbers
        if(!isNaN(num1) && !isNaN(num2)){
            // Perform addition
            let result = Add(num1,num2);

            // Display the result
            console.log(`The sum of ${num1} and ${num2} is: ${result}`);
        } else {
            console.log("Invalid input. Please enter valid numbers.");
        }
    })
})
