let arr= [20,39,11,18,34,19,60,30]

let searchItem = 60;

for(let i=0; i<arr.length; i++){
    if(arr[i] == searchItem){
        console.log(i);
    }
}

// predefine method for searching
console.log(arr.indexOf(searchItem));

// predefine method for deletion.
arr.splice(2,1)
console.log(arr);
