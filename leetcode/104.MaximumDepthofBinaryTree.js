var maxDepth = function (root) {
  if (!root) return 0;

  const leftLength = maxDepth(root.left);
  const rightLength = maxDepth(root.right);

  return Math.max(leftLength, rightLength) + 1;
};
