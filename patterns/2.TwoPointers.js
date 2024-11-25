//Idea: Use two pointers that move along the array from different sides or from one side depends on the task.
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
