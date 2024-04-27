/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// recursive solution
var mergeTrees = function (t1, t2) {
  // goal is to merge t2 to t1

  // if one of the node missing, return the other
  if (t1 === null || t2 === null) {
    return t1 || t2;
  }
  // if both nodes exist, sum the values
  t1.val += t2.val;

  // do the same thing for left and right branch
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  // return the merged t1
  return t1;
};

// another solution involving the constructor function:
// More confusing than above
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null;
  const node = new TreeNode(((t1 || 0).val || 0) + ((t2 || 0).val || 0));
  node.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  node.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  return node;
};

//
var mergeTrees = function (t1, t2) {
  if (t1 === null || t2 === null) {
    return t1 || t2;
  }
  const node = new TreeNode(t1.val + t2.val);
  const left = mergeTrees(t1.left, t2.left);
  const right = mergeTrees(t1.right, t2.right);
  node.left = left;
  node.right = right;
  return node;
};
