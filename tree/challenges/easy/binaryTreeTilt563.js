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
var findTilt = function (node) {
  let ans = 0;

  const findTiltHelper = node => {
    if (node == null) return 0;

    // make recursive calls using post order DFS traversal
    let leftVal = findTiltHelper(node.left);
    let rightVal = findTiltHelper(node.right);

    let temp = node.val + leftVal + rightVal;
    // Math.abs() because the
    ans += Math.abs(leftVal - rightVal);
    node.val = Math.abs(leftVal - rightVal);
    return temp;
  };

  findTiltHelper(node);
  return ans;
};

// we use Math.abs to consider the magnitude of the difference without regard to direction (left heavier than right or vice versa). This approach gaurantees that the ans will be a non-negative value!
