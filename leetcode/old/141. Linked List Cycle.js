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

function hasCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}
