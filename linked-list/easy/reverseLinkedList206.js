import { SinglyLinkedList } from "../implementation.js";
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

// ReCURSIVE SOLUTION:
// var reverseList = function (head) {
//   // Special case...
//   if (head == null || head.next == null) return head;
//   // Create a new node to call the function recursively and we get the reverse linked list...
//   var res = reverseList(head.next);
//   // Set head node as head.next.next...
//   head.next.next = head;
//   //set head's next to be null...
//   head.next = null;
//   return res; // Return the reverse linked list...
// };

let head = new SinglyLinkedList();
// console.log("head:", head);

// ITERATIVE/DESTRUCTURING SOLUTION:
var reverseList = function (head) {
  /*
     
    [null, [1, 2, 3, 4, 5]]

    destructure into [prev, current];
     
    */
  // prev is set to null which will eventually become the new tail of the reversed list
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
console.log(reverseList(head));

// More verbose  of a solution:
var reverseList = function (head) {
  if (!head) return head;

  let prev = null;
  let present = head;
  let next = present.next;

  while (present !== null) {
    present.next = prev;
    prev = present;
    present = next;
    if (next !== null) next = next.next;
  }

  head = prev;

  return head;
};
