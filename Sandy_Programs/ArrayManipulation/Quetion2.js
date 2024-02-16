function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

//   Maximum Subarray Sum:
// Given an integer array, find the contiguous subarray with the largest sum.

  for (let i = 1; i < nums.length; i++) {
      // Choose the larger between the current element and the sum so far plus the current element
      currentSum = Math.max(nums[i], currentSum + nums[i]);

      // Update the maximum sum if the current sum is greater
      maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSubArray(nums);
console.log(result); // Output: 6
