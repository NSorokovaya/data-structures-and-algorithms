// The Top 'K' Elements pattern finds the top k largest or smallest elements in an array or stream of data using heaps or sorting.

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
