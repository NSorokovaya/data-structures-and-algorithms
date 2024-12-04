function BFS(start, graph) {
  let visited = new Set();
  let queue = [start];
  let result = [];

  while (queue.length > 0) {
    let current = queue.shift();

    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);

      for (let neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
  }
  return result;
}
