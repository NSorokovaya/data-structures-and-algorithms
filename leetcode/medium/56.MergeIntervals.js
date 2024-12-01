var merge = function (intervals) {
  let newInterval = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    let [start, end] = interval;

    let lastItem = newInterval[newInterval.length - 1];

    if (!newInterval.length || start > lastItem[1]) {
      newInterval.push(interval);
    } else {
      let newNumber = Math.max(lastItem[1], end);
      lastItem[1] = newNumber;
    }
  }
  return newInterval;
};
