/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 
Given the root of a binary tree, invert the tree, and return its root.
 
*/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Base case...
  if (root == null) {
    return root;
  }
  // Call the function recursively for the left subtree...
  invertTree(root.left);
  // Call the function recursively for the right subtree...
  invertTree(root.right);
  // swapping process...
  // we can use destructuring here as opposed to creating a TEMPORARY variables/reference
  [root.left, root.right] = [root.right, root.left];
  return root; // Return the root...
};

var invertTree = function (root) {
  if (!root) return null; // cheaper than returning root

  // as the tree does down recursively each left / right binary is SWAPPED which effectively "inverts" the tree
  let l = invertTree(root.right);
  let r = invertTree(root.left);

  root.left = l;
  root.right = r;

  return root;
};
