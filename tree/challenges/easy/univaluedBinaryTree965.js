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
// smart to use root.val as a default for the initial execution:
var isUnivalTree = function (root, value = root.val) {
  // end of branch:
  if (!root) return true;

  // equivalency check:
  if (root.val !== value) {
    return false;
  }

  // traverse left first, then right
  // the process will just run until the end of each branch and will
  // therefore keeping return true recursively
  // if there is no
  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};

// alternative method:
var isUnivalTree = (root) => seek(root, root.val);
const seek = (root, value) => {
  if (!root) return true;
  if (root.val !== value) return false;
  // putting the return into an if statement ensures no more executions:
  if (!seek(root.left, value) || !seek(root.right, value)) return false;
  return true;
};

// BFS
var isUnivalTree = function (root) {
  let queue = [root],
    val = root.val;

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.val !== val) return false;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;
};
