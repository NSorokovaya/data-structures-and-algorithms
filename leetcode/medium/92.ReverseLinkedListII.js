var reverseBetween = function (head, left, right) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;

  let current = head;
  let leftPrev = dummy;
  let next = null;

  for (let i = 0; i < left - 1; i++) {
    leftPrev = leftPrev.next;
    current = current.next;
  }

  let subList = current;
  let prev = null;

  for (let i = left; i <= right; i++) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  leftPrev.next = prev;
  subList.next = current;

  return dummy.next;
};
