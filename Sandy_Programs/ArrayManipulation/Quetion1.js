// Write a function to rotate an array of integers to the right by k steps. For example, 
// given [1, 2, 3, 4, 5, 6, 7] and k = 3, the array should be rotated to [5, 6, 7, 1, 2, 3, 4].

function rotateArrayRight(step){
  let arr=[1, 2, 3, 4, 5, 6, 7]
console.log(arr,'Without Rotate')
  for(let i=0;i<step;i++){
    let val=arr[arr.length-1]
    arr.length=arr.length-1//splice(arr.length-1,1)
    arr.unshift(val);
    // i--
  }
  console.log(arr,'After Rotate');
}
rotateArrayRight(13);
