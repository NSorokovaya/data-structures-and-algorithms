var cloneGraph = function (node) {
  if (!node) return null;

  let visited = new Map();
  let stack = [node];

  //  new map: original node - copy of node
  visited.set(node, new Node(node.val));

  while (stack.length > 0) {
    let current = stack.pop();

    for (let neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        stack.push(neighbor);
      }
      visited.get(current).neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
};
