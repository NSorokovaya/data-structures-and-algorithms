var findKthLargest = function (nums, k) {
  let minHeap = [];

  for (let num of nums) {
    minHeap.push(num);
    if (minHeap.length > k) {
      minHeap.sort((a, b) => a - b);
      minHeap.shift();
    }
  }
  return minHeap[0];
};
