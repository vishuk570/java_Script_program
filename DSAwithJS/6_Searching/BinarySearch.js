// 1. itterative
let myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let myTarget = 15

function binarySearch(arr,target){
    let start = 0
    let end = arr.length - 1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(myArray[mid] == target){
            return mid;
        } 

        if(myArray[mid]<target){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }

    return -1;

}

const result = binarySearch(myArray, myTarget)

console.log("result",result);