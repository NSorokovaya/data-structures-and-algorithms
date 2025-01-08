//Idea: Use two pointers that move along the array from different sides or from one side depends on the task.

//Use this pattern when dealing with sorted arrays or lists where you need to find pairs that satisfy a specific condition.

// examle:

function twoSum(nums, target) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = target.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (target < sum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
