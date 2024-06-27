// Array Sorting 
let arr = [2,5,3,1,4] 

// predefine method for sorting a array
let newArr = arr.sort((a,b)=>a-b)
console.log("newArr",newArr);

// without sort() method.
// Bubble Sorting: Bubble Sort is an algorithm that sorts an array 
//                 from the lowest value to the highest value.
// complexity : n*n
// How it works:
// 1.Go through the array, one value at a time.
// 2.For each value, compare the value with the next value.
// 3.If the value is higher than the next one, swap the values so that the highest value comes last.
// 4.Go through the array as many times as there are values in the array.

// Algorithm
// 1. n = length of my_array
// 2. loop i to n-1
// 3. nest loop j to n-i-1
// 4. if my_array[j] > my_array[j+1]:
//         swap j and j+1

// program
let myArr = [3,1,2,5,4]
let n = myArr.length
for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1; j++){
        if(myArr[j]>myArr[j+1]){
            let temp = myArr[j]
            myArr[j] = myArr[j+1]
            myArr[j+1] = temp
        }
    }
}
console.log("myArr",myArr);

