let arr= [20,39,11,20,34,19]
let position = 2;
console.log("arr1",arr);
for(let i=position;i<arr.length-1;i++){
    arr[i]=arr[i+1]
}
arr.length = arr.length-1
console.log("arr2",arr);