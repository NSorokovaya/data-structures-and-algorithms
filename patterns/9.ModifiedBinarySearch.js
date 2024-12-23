var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    // [4, 5, 6, 7, 0, 1, 2];
    // if left side is sorted
    if (nums[mid] >= nums[left]) {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // [ 6, 7,0,1,2,4, 5]
      // if right side is sorted
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
