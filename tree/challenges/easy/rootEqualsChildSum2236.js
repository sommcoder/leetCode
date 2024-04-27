/**
 * You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.
 * 
 * 
 * 
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// original:
var checkTree = function (root) {
  function BFS(lNode, rNode) {
    if (lNode?.val + rNode?.val === root?.val) return true;
    else return false;
  }
  return BFS(root.left, root.right);
};

// optimized:
var checkTree = function (root) {
  return root?.right?.val + root?.left?.val === root?.val ? true : false;
};

// vals can't be null so this works!
const checkTree = (root) => root.val === root.left.val + root.right.val;
