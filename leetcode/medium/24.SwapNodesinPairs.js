var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;

  let current = dummy;

  while (current.next && current.next.next) {
    let firstNext = current.next;
    let secondNext = current.next.next;

    firstNext.next = secondNext.next;
    secondNext.next = firstNext;
    current.next = secondNext;

    current = current.next.next;
  }

  return dummy.next;
};
