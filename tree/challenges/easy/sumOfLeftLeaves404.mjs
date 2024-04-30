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
 * @return {number}
 */

// My initial successful solution:
var sumOfLeftLeaves = function (root) {
  /* 
    - sum all left leaves:
        - identify a left leaf
        - create a variable that we add onto as we
        find left leaves
    
    - how to identify a LEFT node
    - we identify a leaf node by determining

    */

  let sum = 0;

  function DFS(node, isLeft) {
    if (!node) return 0;

    DFS(node.left, true);
    DFS(node.right);
    // leaf node:
    if (!node.left && !node.right && isLeft) {
      sum += node.val;
    }
  }

  DFS(root);
  return sum;
};

// more concise solution, better performance, not amazing though
var sumOfLeftLeaves = function (root, isLeft = false) {
  if (!root) return 0;
  if (!root.left && !root.right && isLeft) return root.val;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};

// better performance:
var sumOfLeftLeaves = function (root) {
  var sum = 0;
  function traverse(node) {
    if (!node) {
      return;
    }
    if (node.left !== null) {
      if (node.left.left === null && node.left.right === null) {
        sum += node.left.val;
      }
    }
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return sum;
};
