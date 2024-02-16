// Two Sum:
// Given an array of integers, find two numbers such that they add up to a specific target number.

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      // Check if the complement exists in the map
      if (numMap.has(complement)) {
          // Return the indices of the two numbers
          return [numMap.get(complement), i];
      }

      // Store the current number and its index in the map
      numMap.set(nums[i], i);
  }

  // If no solution is found
  return [];
}

// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (indices of numbers 2 and 7 that add up to 9)
