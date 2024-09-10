// You have  to find a way to repeatedly sum the digits of a number until a single-digit result is obtained. 
// For example, given the integer 567, how can you implement a function to calculate its digital root, which should return 9



// Brute-force Approach - 1st Approach

let digit = (567).toString();
console.log(digit);

let splittedDigit = digit.split(''); // Split into array of characters (strings)
console.log(splittedDigit, "splittedDigit");

let sum = 0;

// Sum the digits
for (let i = 0; i < splittedDigit.length; i++) {
    sum += parseInt(splittedDigit[i], 10); // Convert each character to a number before adding
}

console.log(sum); // This will give the sum of digits (5 + 6 + 7 = 18)

// If the sum is still greater than 9, repeat the process
while (sum > 9) {
    let tempSum = 0;
    let sumString = sum.toString(); // Convert sum to string to split digits
    let newSplittedDigit = sumString.split(''); // Split sum into digits again
    
    for (let i = 0; i < newSplittedDigit.length; i++) {
        tempSum += parseInt(newSplittedDigit[i], 10); // Convert back to number and add
    }
    sum = tempSum; // Update sum to the new result
}

console.log(sum); // This will print the final single-digit result (9)



// Simplest & easy way to do it  -- 2nd Approach
function digitalRoot(num) {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
}

// Example usage
console.log(digitalRoot(567)); // Output: 9
