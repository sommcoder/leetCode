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
var averageOfSubtree = function (root) {
  let result = 0;

  const traverse = (node) => {
    // no more node on branch check:
    if (!node) return [0, 0];

    // we're employing a post-order traversal:
    // read the left, read the right, then read the node.val
    const [leftSum, leftCount] = traverse(node.left);
    const [rightSum, rightCount] = traverse(node.right);

    const currSum = node.val + leftSum + rightSum;
    const currCount = 1 + leftCount + rightCount;

    // average check, increment counter:
    if (Math.floor(currSum / currCount) === node.val) result++;

    // return the current sum and current count for each node
    return [currSum, currCount];
  };

  traverse(root);
  return result;
};

// Intuition
// The problem asks us to count the number of nodes where the node's value is equal to the average of its subtree (including itself). To calculate the average, we need the sum and count of nodes in the subtree. Our first thought could be to traverse the tree and, for every node, calculate the sum and count of nodes in its subtree and then check if the average matches the node's value. However, this would lead to recalculating the sum and count for overlapping subtrees, resulting in a time complexity of O(n2)O(n^2)O(n
// 2
//  ). Instead, we can optimize our approach to calculate the sum and count while traversing the tree in a single pass.

// Approach
// To solve the problem, we employ a post-order traversal approach. In post-order traversal, the tree is traversed in such a way that we first explore the left subtree, then the right subtree, and finally the node itself. This method is particularly suitable for this problem because, to determine the average value of a subtree rooted at a node, we need information from its left and right subtrees first.
