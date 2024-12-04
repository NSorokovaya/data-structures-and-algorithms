var levelOrder = function (root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let size = queue.length;
    let subarray = [];

    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      subarray.push(current.val);

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    result.push(subarray);
  }

  return result;
};
// use bfs, but we need to keep track on levels
