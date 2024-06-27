// Reverse Array using Recursion
let arr = [20,56,2,6,24]
let start = 0
let end = arr.length-1
function reverseArr(arr,start,end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    if(start<end){
      reverseArr(arr,start+1,end-1);  
    }
   return arr
}

console.log(reverseArr(arr,start,end))

// Reverse Array using Iteration.
let arr1 = [20, 56, 2, 6, 24]
let start1 = 0
let end1 = arr1.length - 1

for (let i = 0; i < arr1.length - 1; i++) {
    if (start1 < end1) {
        let temp1 = arr1[start1]
        arr1[start1] = arr1[end1]
        arr1[end1] = temp1
        start1++;
        end1--;
    }
}
console.log(arr1);
