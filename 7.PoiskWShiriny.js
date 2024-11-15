const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

function search(graph, start, end) {
  const queue = [];
  queue.push(start);
  let currentGraph = start;
  for (let key in graph) {
    console.log(queue);
    if (queue.includes(end)) {
      return true;
    } else if (graph[key].filter((gr) => gr === currentGraph)) {
      queue.push(key);
    }
    currentGraph = key;
  }
  return false;
}

console.log(search(graph, "a", "g"));

//to finish

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}
