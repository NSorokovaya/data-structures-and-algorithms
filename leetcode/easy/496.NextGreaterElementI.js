var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }

    if (!stack.length) {
      map.set(nums2[i], -1);
    } else {
      map.set(nums2[i], stack[stack.length - 1]);
    }

    stack.push(nums2[i]);
  }

  return nums1.map((num) => map.get(num) || -1);
};
