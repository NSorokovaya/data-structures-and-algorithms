function reverseLinkedList(head) {
  if (!head || !head.next) return head;

  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;

    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}
