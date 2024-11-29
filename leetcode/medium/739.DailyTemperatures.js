var dailyTemperatures = function (temperatures) {
  let stack = [];
  let result = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    if (!stack.length) {
      result[i] = 0;
    } else {
      result[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return result;
};
