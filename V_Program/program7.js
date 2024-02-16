// Write a function to calculate the sum of elements in an array.

// input = [1,2,3,4,5]
// output = 15

const arr = [1,2,3,4,5]
let sum = 0
for(let i = 0; i<arr.length; i++){
    sum += arr[i];
} 
console.log(sum);


// using reduce
const array = [1,2,3,4,5]
const arrSum = array.reduce((sum,num)=>{
    // console.log(sum,num);
    return sum + num;
},0)
console.log(arrSum);