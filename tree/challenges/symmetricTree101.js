/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) return true;
  return symmetryChecker(root.left, root.right);
};

// recursively travel through the tree:
function symmetryChecker(lNode, rNode) {
  // If both sub trees are empty:
  if (lNode == null && rNode == null) return true;
  // If only one of the sub trees are empty:
  if (lNode == null || rNode == null) return false;
  // If the values dont match up:
  if (lNode.val !== rNode.val) return false;

  // Check both subtrees but travelled in a mirrored/symmetric fashion
  // ! (one goes left, other goes right)  and make sure they're both symmetric
  // this is an important comparison completed IN the return statement:
  return (
    symmetryChecker(lNode.left, rNode.right) &&
    symmetryChecker(lNode.right, rNode.left)
  );
}
