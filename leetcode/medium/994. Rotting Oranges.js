var orangesRotting = function (grid) {
  if (grid.length === 0) return -1;

  let fresh = 0;
  let queue = [];

  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[0].length; n++) {
      if (grid[m][n] === 1) {
        fresh++;
      } else if (grid[m][n] === 2) {
        queue.push([m, n, 0]);
      }
    }
  }

  if (fresh === 0) return 0;
  let maxTime = 0;

  while (queue.length > 0) {
    let size = queue.length;

    let [m, n, time] = queue.shift();
    maxTime = Math.max(maxTime, time);

    let neighbors = [
      [m + 1, n],
      [m - 1, n],
      [m, n + 1],
      [m, n - 1],
    ];

    for (let [k, l] of neighbors) {
      if (
        k >= 0 &&
        l >= 0 &&
        k < grid.length &&
        l < grid[0].length &&
        grid[k][l] === 1
      ) {
        grid[k][l] = 2;
        fresh--;
        queue.push([k, l, time + 1]);
      }
    }
  }

  return fresh === 0 ? maxTime : -1;
};
