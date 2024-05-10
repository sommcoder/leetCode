/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// My original solution:
var middleNode = function (head) {
  /* 
    - so if no middle, return the node to the right
    - well to know the middle, we need to know the length
    - we can push the nodes to an array and return the middle
    node that way
    */
  let seq = [];

  function traverse(node) {
    if (!node) return;
    seq.push(node);
    traverse(node.next);
  }
  traverse(head);

  return seq[Math.ceil((seq.length - 1) / 2)];
};

// looks like this solution has one variable moving at twice
// the speed of the other and therefore by the time the fast variable has reach the final node in the linked list the slow variable will be in the middle of the list.
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

// another version:
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
