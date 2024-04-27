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
var sumRootToLeaf = function (root) {
  let sum = 0;

  /*
 
- So this is a standard DFS but with an additional number parameter passed that represents the current numeric value of the path from the root to the currNode, represented as a decimal Number.

- Once a leaf node is reached (!node.left && !node.right)
we add and assign this value to our sum.
- after we've traversed the whole tree, we return the sum
 
*/

  function DFS(node, currNumber) {
    if (!node) return; // if no children
    // if has children:
    // Update the current number by multiplying by 2
    // (same as left shift operator) and adding current node's value

    // currNumber= the current numeric value of the path from the root to the current node, represented as an integer
    currNumber = currNumber * 2 + node.val;
    // Check if the node is a leaf
    if (!node.left && !node.right) {
      // If it's a leaf, add the current number to the sum
      sum += currNumber;
    } else {
      DFS(node.left, currNumber);
      DFS(node.right, currNumber);
    }
  }
  DFS(root, 0); // initial currNumber is 0
  return sum;
};
