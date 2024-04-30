/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root],
    res = [];

  while (stack.length) {
    let node = stack[stack.length - 1]; // not using pop
    if (node.left) {
      stack.push(node.left);
      node.left = null; // uses null to mark them as visited
    } else if (node.right) {
      stack.push(node.right);
      node.right = null;
    } else res.push(stack.pop().val);
  }
  return res;
  // Time Complexity: O(n)
  // Space Complexity: O(n)
};

var postorderTraversal = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result.reverse(); // reverse the output array with built-in function
};

/*
 
as you loop and get nodes from the array and traverse deeper, add the values to an output array from front to back.
 
*/
var postorderTraversal = function (root) {
  if (!root) return []; // Empty tree

  const result = []; // Initialize result array
  const stack = []; // Initialize stack

  stack.push(root); // Push root node onto stack

  while (stack.length) {
    const current = stack.pop(); // Pop node from stack
    result.unshift(current.val); // Add node value to beginning of result array (postorder)

    // Push left child onto stack (if exists)
    if (current.left) stack.push(current.left);
    // Push right child onto stack (if exists)
    if (current.right) stack.push(current.right);
  }

  return result; // Return postorder traversal
};
