//Use this pattern for exploring all paths or branches in graphs or trees.

// iterative
function DFS(graph, start) {
  let visited = new Set();
  let stack = [start];

  while (stack.length > 0) {
    let current = stack.pop();

    if (!visited.has(current)) {
      visited.add(current);

      for (let neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}

//recursion

function DFS(graph, start) {
  let visited = new Set();

  function recursive(graph, node, visited) {
    if (visited.has(node)) return;

    visited.add(node);

    for (let neighbor of graph[node]) {
      recursive(graph, neighbor, visited);
    }
  }

  recursive(graph, start, visited);
}

let graph = {
  1: [2, 3],
  2: [4],
  3: [5],
  4: [],
  5: [],
};

DFS(graph, 1);
