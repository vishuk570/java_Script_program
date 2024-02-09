// Given an array containing n distinct numbers taken from the range 1 to n+1, find the missing number.
// input = [1,2,3,4,5,6,7,8,10]
// output = 9

function findMissingNumber(arr) {
    // const n = arr.length + 1; // Since there's one missing number
    // const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    // let actualSum = 0;

    // // Calculate the actual sum of elements in the array
    // for (let i = 0; i < arr.length; i++) {
    //     actualSum += arr[i];
    // }

    // // The difference between the total sum and actual sum will give us the missing number
    // return totalSum - actualSum;

    for(let i=1; i<=arr.length; i++){
        if(arr[i]+1 != arr[i+1]){
            return arr[i]+1;
        }
    }
}

// Example usage:
const arr = [1,2,3,4,5,6,7,9,10]; // Assume one number is missing from the sequence 1 to n+1
console.log(findMissingNumber(arr)); // Output should be the missing number, in this case: 4
