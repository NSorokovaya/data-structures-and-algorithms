var pathSum = function (root, targetSum) {
  if (!root) return [];
  let result = [];

  function recursion(root, sum, path) {
    if (!root) return;

    sum += root.val;
    path.push(root.val);

    if (!root.left && !root.right && sum === targetSum) {
      result.push([...path]);
    }

    recursion(root.left, sum, path);
    recursion(root.right, sum, path);

    path.pop();
  }

  recursion(root, 0, []);
  return result;
};
