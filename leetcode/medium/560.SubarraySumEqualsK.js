var subarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, 1);

  let prefixSum = 0;
  let totalCount = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (map.has(prefixSum - k)) {
      totalCount += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return totalCount;
};
