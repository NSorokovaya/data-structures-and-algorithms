var productExceptSelf = function (nums) {
  // we need to multiply for each num all numbers on the left side from it and on the right side, then multiply these columns
  // left [1, 1, 2, 6]
  //right [24, 12, 4, 1]

  let left = [];
  let right = [];

  left[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  // to right array will assign new calcs
  for (let i = 0; i < nums.length; i++) {
    right[i] = left[i] * right[i];
  }
  return right;
};
