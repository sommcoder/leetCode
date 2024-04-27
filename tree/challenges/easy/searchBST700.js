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
 * @param {number} val
 * @return {TreeNode}
 */

/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
*/
var searchBST = function (root, val) {
  /**
    - use target to find matching node and return it's subtree
    which is believe would just be the node?
     */

  // create a BFS queue:
  let queue = [root];

  while (queue.length) {
    // enqueue currNode:
    let currNode = queue.shift();

    // check val:
    if (currNode.val === val) {
      return currNode;
    }
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
  // if no subtree, return null
  return null;
};
