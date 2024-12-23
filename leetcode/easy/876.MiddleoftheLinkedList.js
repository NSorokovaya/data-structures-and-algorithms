var middleNode = function (head) {
  let nodes = [];

  if (!head) return 0;
  let length = 0;
  while (head !== null) {
    nodes.push(head.val);
    head = head.next;
    length++;
  }
  let midIndex = Math.floor(nodes.length / 2);

  let newList = null;

  for (let i = nodes.length - 1; i >= midIndex; i--) {
    const newNode = { val: nodes[i], next: newList };
    newList = newNode;
  }

  return newList;
};

// two pointers approach

var middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};
