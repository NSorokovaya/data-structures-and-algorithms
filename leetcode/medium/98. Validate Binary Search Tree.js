var isValidBST = function (root) {
  // concept: if we make in order traversal we can get binary tree, cause it will be sorted after traversal

  let tree = [];

  traversal(root, tree);

  for (let i = 0; i < tree.length; i++) {
    if (tree[i] <= tree[i - 1]) return false;
  }

  return true;
};

function traversal(root, tree) {
  if (!root) return;

  traversal(root.left, tree);
  tree.push(root.val);
  traversal(root.right, tree);
}
