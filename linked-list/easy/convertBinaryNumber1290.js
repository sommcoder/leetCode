/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

// my first attempt
var getDecimalValue = function (head) {
  /* 
    - either 0 or 1
    = return the decimal value of the binary
    number represented in the complete linked list
    
    */
  let binaryArr = [];

  function traverse(node) {
    if (!node) return;
    binaryArr.push(node.val);
    traverse(node.next);
  }
  traverse(head);
  return parseInt(binaryArr.join(""), 2);
};

// Leetcode top solution using bitwise operators:
// use the base function to traverse
const getDecimalValue = (head) => {
  let val = 0;
  while (head) {
    val = (val << 1) | head.val;
    head = head.next;
  }
  return val;
};
