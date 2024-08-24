// Print n number value in 1 sec diffrence.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printNumbers() {
  // Take input from the user
  rl.question('Enter a number: ', (input) => {
    
  // Convert the input to a number
  n = parseInt(input);

  // Check if the input is a valid number
  if (!isNaN(n) && n > 0) {
    // Print numbers from 1 to n
      for (let i = 1; i <= n; i++) {
          setTimeout(() => (
              console.log(i)
          ), 1000 * i)
      }
  } else {
    console.log("Invalid input. Please enter a valid positive number.");
  }
  })
}

// Call the function
printNumbers();