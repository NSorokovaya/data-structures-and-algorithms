// PreOrder (root -> left -> right)
function preOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (node) {
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(root);
  return result;
}

// InOrder (left -> root -> right)
function inOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (node) {
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
  }
  traverse(root);
  return result;
}

// PostOrder (left -> right -> root)
function postOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (node) {
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
  }
  traverse(root);
  return result;
}
