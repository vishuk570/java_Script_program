let arr = [3, 7, 2, 9, 5]
let targetVal = 2

function linearSearch(arr,targetVal){
    if(arr.length == 0){
        console.log("Array is empty"); 
        return;
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] == targetVal){
            return i;
        } 
    }
    return -1

}

const index = linearSearch(arr,targetVal);
console.log("index number",index);