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
var countNodes = function (root) {
  if (!root) return 0;

  function depthCheck(node) {
    let depth = 0;
    while (node) {
      depth++;
      node = node.left;
    }
    return depth;
  }

  let ld = depthCheck(root.left);
  let rd = depthCheck(root.right);

  if (ld === rd) {
    // left subtree is complete to the height of leftDepth
    return 2 ** ld + countNodes(root.right);
  } else {
    // right subtree is complete to the height of rightDepth
    return 2 ** rd + countNodes(root.left);
  }
  // check the depth of the left-most brand:
};

// another solution:
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
var countNodes = function (root) {
  if (!root) return 0;
  let levelsCount = 1;

  function traverse(root) {
    if (root.left) {
      levelsCount++;
      traverse(root.left);
    }
  }

  traverse(root);
  const lastLevelMaxNodes = Math.pow(2, levelsCount - 1);
  let left = 0;
  let right = lastLevelMaxNodes - 1;

  function search(node, index, left, right, count = 1) {
    const mid = Math.ceil((right + left) / 2);
    if (count === levelsCount) {
      return node;
    }
    if (index < mid) {
      return search(node.left, index, left, mid - 1, count + 1);
    } else {
      return search(node.right, index, mid, right, count + 1);
    }
  }

  while (left !== right) {
    const mid = Math.ceil((right + left) / 2);
    const node = search(root, mid, 0, lastLevelMaxNodes - 1);
    if (node) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  const nodesInLastLevel = left + 1;
  return Math.pow(2, levelsCount - 1) - 1 + nodesInLastLevel;
};
