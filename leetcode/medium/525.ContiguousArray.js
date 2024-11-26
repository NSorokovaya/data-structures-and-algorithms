var findMaxLength = function (nums) {
  let map = new Map();
  map.set(0, -1);
  let maxLength = 0;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i] === 0 ? -1 : 1;

    if (map.has(prefixSum)) {
      maxLength = Math.max(maxLength, i - map.get(prefixSum));
    } else {
      map.set(prefixSum, i);
    }
  }

  return maxLength;
};
