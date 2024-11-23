var updateMatrix = function (mat) {
  let queue = [];
  let dirs = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  while (queue.length > 0) {
    let [currX, currY, dist] = queue.shift();

    if (mat[currX][currY] > dist) {
      mat[currX][currY] = dist;
    }

    for (let [x, y] of dirs) {
      let nextX = currX + x;
      let nextY = currY + y;
      let nextDist = dist + 1;

      if (
        nextX < 0 ||
        nextX >= mat.length ||
        nextY < 0 ||
        nextY >= mat[0].length ||
        mat[nextX][nextY] <= nextDist
      ) {
        continue;
      }

      queue.push([nextX, nextY, nextDist]);
      mat[nextX][nextY] = nextDist;
    }
  }
  return mat;
};
