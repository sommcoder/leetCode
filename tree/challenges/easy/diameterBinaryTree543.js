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

/*
 
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
 
*/

var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function dfs(node) {
    if (!node) return 0;

    // Explore the MAX depths of each side from the root
    // until (!node) is reached and therefore no more nodes.
    // recursively go through left FIRST until dead end
    const left = dfs(node.left);
    // then recursively go through right until dead end
    const right = dfs(node.right);

    // traverses like this:
    // |_
    //   |_
    //     |_
    //       |_
    //         |_

    // update diameter at every node
    // diameter = left depth + right depth?
    diameter = Math.max(diameter, left + right);

    // update the largest number of edge so far
    // 1+ takes into account the initial root node
    return 1 + Math.max(left, right);
  }
  // start the recursion with the root node
  dfs(root);

  return diameter;
};
