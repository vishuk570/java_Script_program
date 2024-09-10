// Write a function to rotate an array of integers to the right by k steps without using any inbuilt methods. For example, 
// given [1, 2, 3, 4, 5, 6, 7] and k = 3, the array should be rotated to [5, 6, 7, 1, 2, 3, 4]. 
// Also you need to do this in best time & space complexity.

// By using inbuilt methods. - (Won't accepetable in major interviews)
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



// Brute force approach where time complexity is o(n) & space complecity O(k).

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  // Handle cases where k is greater than array length
    
    // Step 1: Store the last k elements in a temp array
    const temp = [];
    for (let i = n - k; i < n; i++) {
        temp.push(arr[i]);
    }
    
    // Step 2: Shift the first n-k elements to the right
    for (let i = n - k - 1; i >= 0; i--) {
        arr[i + k] = arr[i];
    }
    
    // Step 3: Copy the temp elements to the beginning of the array
    for (let i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
}

// Example usage:
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
rotateArray(arr, k);
console.log(arr);  // Output: [5, 6, 7, 1, 2, 3, 4]



// Best time & space complexity

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  // In case k is greater than the length of the array
    
    // Helper function to reverse a part of the array
    function reverse(arr, start, end) {
        while (start < end) {
            // Swap arr[start] and arr[end]
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(arr, 0, n - 1);
    // Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Reverse the remaining n-k elements
    reverse(arr, k, n - 1);
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotateArray(arr, k);
console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]



