function findTopKElements(nums, k) {
  let minHeap = [];

  for (let num of nums) {
    minHeap.push(num);
    minHeap.sort((a, b) => a - b);

    if (minHeap.length >= k) {
      minHeap.shift();
    }
  }

  return minHeap;
}
