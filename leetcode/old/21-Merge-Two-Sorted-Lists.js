/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
  // const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
  // ----
  // const list1 = null;
  // const list2 = null;
  // ----
  // const list1 = null;
  // const list2 = { val: 0, next: null }

  let resultListHead = null;
  let resultListTail = null;

  const addNodeToResultList = (node) => {
    if (resultListHead === null) {
      // initialize list
      resultListHead = node;
      resultListTail = node;
      // ???
    } else {
      // ???
      resultListTail.next = node;
      resultListTail = resultListTail.next;
    }
  };

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      addNodeToResultList(list1);
      list1 = list1.next;
    } else {
      addNodeToResultList(list2);
      list2 = list2.next;
    }
  }
  if (list1 !== null) {
    addNodeToResultList(list1);
  } else if (list2 !== null) {
    addNodeToResultList(list2);
  }
  // move pointers, insert nodes in correct order

  return resultListHead;
};
