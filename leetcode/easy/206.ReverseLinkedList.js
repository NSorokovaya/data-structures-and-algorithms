var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;

  if (!head) return null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
