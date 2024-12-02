var binaryTreePaths = function (root) {
  if (!root) return [];
  let result = [];

  function reverseTree(root, path) {
    if (!root) {
      return;
    }

    path += root.val;

    if (!root.left && !root.right) {
      result.push(path);
    } else {
      path += "->";
      reverseTree(root.left, path);
      reverseTree(root.right, path);
    }
  }
  reverseTree(root, "");
  return result;
};
