var hasCycle = function (head) {
  const indexes = new Map();
  // {'1': true; '2': true}
  let currentNode = head;

  while (currentNode !== null) {
    if (indexes.get(currentNode)) {
      return true;
    }

    indexes.set(currentNode, true);
    // indexes['Object object'] = true;
    currentNode = currentNode.next;
  }

  return false;
};
