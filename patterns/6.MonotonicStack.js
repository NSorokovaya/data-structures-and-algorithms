function nextGreaterElements(nums) {
  let stack = [];
  let result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    if (!stack.length) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }

    stack.push(nums[i]);
  }

  return result;
}
