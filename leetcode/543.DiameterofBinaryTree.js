var diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  let diameter = 0;

  const searchDiameter = (root) => {
    if (!root) return 0;

    const leftLength = searchDiameter(root.left);
    const rightLength = searchDiameter(root.right);

    diameter = Math.max(diameter, leftLength + rightLength);
    return Math.max(leftLength, rightLength) + 1;
  };

  searchDiameter(root);
  return diameter;
};
