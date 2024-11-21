//my first solution

var insert = function (intervals, newInterval) {
  let updatedInterval = [];

  for (let [start, end] of intervals) {
    if (newInterval[0] > end || newInterval[1] < start) {
      updatedInterval.push([start, end]);
    } else {
      newInterval[0] = Math.min(start, newInterval[0]);
      newInterval[1] = Math.max(end, newInterval[1]);
    }
  }
  updatedInterval.push(newInterval);

  return updatedInterval.sort((a, b) => a[0] - b[0]);
};
