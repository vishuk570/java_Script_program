let arr= [20,39,11,20,34,19]
let el = 33;
let position = 2;
console.log("arr1",arr);
for(let i=arr.length-1; i>=0; i--){
   if(i>=position){
    arr[i+1]=arr[i]
    if(i==position){
        arr[i]=el
    }
   }
}
console.log("arr2",arr);
