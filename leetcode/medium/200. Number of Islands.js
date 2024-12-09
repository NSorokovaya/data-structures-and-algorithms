var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let sum = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        bfs(row, col, grid);
        sum++;
      }
    }
  }

  return sum;
};

function bfs(row, col, grid) {
  let queue = [[row, col]];

  grid[row][col] = "0";

  while (queue.length > 0) {
    let [row, col] = queue.shift();

    let neighbors = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ];

    for (let [nRow, nCol] of neighbors) {
      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < grid.length &&
        nCol < grid[0].length &&
        grid[nRow][nCol] === "1"
      ) {
        queue.push([nRow, nCol]);
        grid[nRow][nCol] = "0";
      }
    }
  }
}
