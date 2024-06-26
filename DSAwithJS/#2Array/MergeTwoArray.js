let arr1= [1,2,3,4,5,6]
let arr2= [7,8,9,10]

// 1st Method.
for(let i=0; i<arr2.length; i++){
    arr1.push(arr2[i])
}
console.log(arr1);

// 2nd Method (predefine method)
arr1.concat(arr2)
console.log(arr1);

// 3rd Method 
let arr3 = [...arr1,...arr2]
console.log("arr3",arr3);

// Reverse Array
let arr= [1,2,3,4,5,6]
console.log(arr.reverse());