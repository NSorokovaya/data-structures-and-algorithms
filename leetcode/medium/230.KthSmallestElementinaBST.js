var kthSmallest = function (root, k) {
  let nodes = [];
  if (!root) return [];

  function traversal(root) {
    if (!root) return;

    traversal(root.left);

    nodes.push(root.val);

    traversal(root.right);
  }

  traversal(root);

  return nodes[k - 1];
};
