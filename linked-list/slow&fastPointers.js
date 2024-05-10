var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

/*
 
- This is a technique commonly known as "slow & fast pointers"
to find the middle node of a singly linked list.

- The loop exists when 'fast' reaches the end of the list or goes PAST IT if the list has an even number of elements!

- This method is effient because it only requires ONE pass through the list and no extra memory required like an array to track the sequence of nodes.

- Time complexity is O(n) because the time is LINEAR based on the number of nodes in the list.

- space complexity is O(1) because it USES a CONSTANT amount of space regardless of the size of the input list
 
*/
