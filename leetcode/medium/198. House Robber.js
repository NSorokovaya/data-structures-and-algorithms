var rob = function (nums) {
  // Create array to store the maximum loot at each index
  let storage = [];

  if (nums.length < 2) return nums[0];
  // Memoize maximum loots at first 2 indexes
  storage[0] = nums[0];
  storage[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // Core logic
    storage[i] = Math.max(nums[i] + storage[i - 2], storage[i - 1]);
  }

  return storage[storage.length - 1];
};
