var topKFrequent = function (nums, k) {
  let map = new Map();
  let bucket = [];
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let [number, count] of map) {
    if (!bucket[count]) {
      bucket[count] = [];
    }
    bucket[count].push(number);
  }

  let result = [];

  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }
  }
  return result.slice(0, k);
};
