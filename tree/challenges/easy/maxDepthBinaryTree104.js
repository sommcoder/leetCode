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

var maxDepth = function (root) {
  // Empty tree clause:
  if (root == null) return 0;
  return calculateDepth(root);
};

function calculateDepth(root) {
  // Identify leaf node:
  if (root.left == null && root.right == null) return 1;

  let maxDepth = 0;

  if (root.left != null) {
    maxDepth = calculateDepth(root.left);
  }

  if (root.right != null) {
    let depth = calculateDepth(root.right);
    if (depth > maxDepth) {
      maxDepth = depth;
    }
  }

  return maxDepth + 1;
}

class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// create binary tree:
let rootNode = new Node(
  2,
  new Node(4, new Node(7), new Node(3)),
  new Node(5, new Node(4, null, new Node(8), null))
);

console.log("Node:", rootNode);

// elegant solution:
var maxDepth = function (root) {
  function countHeight(node) {
    if (!node) return 0;

    return 1 + Math.max(countHeight(node.left), countHeight(node.right));
  }
  return countHeight(root);
};

let max = maxDepth(rootNode);

console.log("max:", max);
