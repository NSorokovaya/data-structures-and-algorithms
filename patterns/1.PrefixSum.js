function prefixSum(arr) {
  let prefixSum = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  function getRangeSum(left, right) {
    if (left === 0) return prefixSum[right];
    return prefixSum[right] - prefixSum[left - 1];
  }

  return getRangeSum;
}

const arr = [1, 2, 3, 4, 5];
const getSum = prefixSum(arr);
console.log(getSum(1, 3));
