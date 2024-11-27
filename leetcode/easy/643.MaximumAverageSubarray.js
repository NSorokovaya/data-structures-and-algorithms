var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let left = 0;
  let right = k - 1;
  let maxSum = sum;

  while (right < nums.length - 1) {
    sum -= nums[left];
    left++;

    right++;
    sum += nums[right];

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
