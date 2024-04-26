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
 * @return {boolean}
 */
var evaluateTree = function (root) {
  /**
    - leaf nodes = 0 or 1
    - non-leaf nodes = 2 or 3
      - 2 = OR
      - 3 = AND
    - tree is FULL/COMPLETE, every parent has 2 children
     */

  // IDENTIFY LEAF NODES:
  if (!root.left && !root.right) {
    // Return true if the value is 1, false if 0
    return root.val === 1;
  }

  let leftNode = evaluateTree(root.left);
  let rightNode = evaluateTree(root.right);
  // once we have our left and right nodes we now
  // need to create an expression using the parent as the comparison operator

  if (root.val === 2) {
    return leftNode || rightNode;
  } else if (root.val === 3) {
    return leftNode && rightNode;
  }
};
