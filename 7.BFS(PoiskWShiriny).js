const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();

    if (!graph[current]) {
      graoh.current = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue.push(...queue, ...graph[current]);
    }
  }
  return false;
}

console.log(breadthSearch(graph, "a", "f"));
