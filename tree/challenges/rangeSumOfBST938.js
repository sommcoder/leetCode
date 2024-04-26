/**
 * Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
 *
 *
 *
 *
 *
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// MY SOLUTION:
var rangeSumBST = function (root, low, high) {
  /* 
    1) Traverse the WHOLE tree
    2) Check value against range (low, high)
    3) If between range, add to count
    4) Create a queue to track qualifying node.vals
    */
  let sum = 0;
  let queue = [root]; // extra memory. Not necessary. Use recursion next time.

  while (queue.length) {
    let node = queue.shift(); // get next el in queue
    if (node?.val) {
      if (node.val <= high && node.val >= low) {
        sum += node.val;
      }
    }
    // add more to the queue
    if (node?.left) queue.push(node.left);
    if (node?.right) queue.push(node.right);
  }
  return sum;
};

var rangeSumBST = function (root, low, high) {
  if (!root) {
    return 0;
  }

  const currentVal = root.val >= low && root.val <= high ? root.val : 0;

  const leftSum = rangeSumBST(root.left, low, high);
  const rightSum = rangeSumBST(root.right, low, high);

  return currentVal + leftSum + rightSum;
};

// DEPTH FIRST SOLUTION
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  // use Recursive function
  const dfs = (node) => {
    // node was null, return;
    if (!node) return;

    // goes down
    dfs(node.left);
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    dfs(node.right);
  };

  dfs(root);

  return sum;
};

// DEPTH FIRST
var rangeSumBST = function (root, low, high) {
  let sum = 0;

  const dfs = (root) => {
    if (!root) {
      return;
    }
    // extra comparison checks to DECIDE whether to recursively go right or left unline the above example
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }

    if (root.val < low || root.val < high) {
      dfs(root.right);
    }

    if (root.val > high || root.val > low) {
      dfs(root.left);
    }
  };

  dfs(root);

  return sum;
};
