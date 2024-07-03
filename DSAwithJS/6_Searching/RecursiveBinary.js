let arr = [ 2, 3, 4, 10, 40 ];
let find =  10;
let start = 0;
let end = arr.length-1
function binarySearch(arr, start, end, find){
    if (end >= start) {
        let mid = start + Math.floor((end - start) / 2);

        // If the element is present at the middle
        // itself
        if (arr[mid] == find)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > find)
            return binarySearch(arr, start, mid - 1, find);

        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, end, find);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

let result = binarySearch(arr, start, end, find);
(result == -1) ? console.log( "Element is not present in array")
               : console.log("Element is present at index " +result);
