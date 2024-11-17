var isBalanced = function (root) {
  let isBalanced = true;

  const defineTree = (node) => {
    if (!node) return 0;

    const leftLength = defineTree(node.left);
    const rightLength = defineTree(node.right);

    if (Math.abs(rightLength - leftLength) > 1) {
      isBalanced = false;
    }
    return Math.max(leftLength, rightLength) + 1;
  };
  defineTree(root);
  return isBalanced;
};
