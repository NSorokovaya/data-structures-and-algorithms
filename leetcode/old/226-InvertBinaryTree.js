//РЕКУРСИВНЫЙ
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  let left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

//ИМПЕРАТИВНЫЙ(ИСПОЛЬЗУЯ ОЧЕРЕДЬ)

var invertTree = function (root) {
  if (root === null) {
    return root;
  }

  let queue = [root];
  console.log(queue);
  while (queue.length) {
    let node = queue.shift();
    let left = node.left;
    node.left = node.right;

    node.right = left;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return root;
};
