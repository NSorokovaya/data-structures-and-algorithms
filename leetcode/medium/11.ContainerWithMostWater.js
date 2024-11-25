var maxArea = function (height) {
  let result = 0;

  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    let sum = Math.min(height[i], height[j]) * (j - i);
    result = Math.max(result, sum);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return result;
};
