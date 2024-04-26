/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// a really elegant recursive solution:
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// a SUPER incredibly simple solution. Just make them both into JSON strings and compare them.
var isSameTree = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};

// Using a Queue and a Breadth-First Approach (BDF)
// we traverse DOWN to the leaf nodes unidirectionally
// we create the queue, extract from the 0 index, and push to the END of the queue so that we can
var isSameTree = function (p, q) {
  // assign the HEADS as PAIRS in the queue
  let queue = [[p, q]];

  // Loop continues as long as there are elements in the queue
  while (queue.length) {
    let [x, y] = queue.shift();

    // if both leaves
    if (x == null && y == null) continue;
    if (!x || !y) return false;
    if (x.val == y.val) {
      //The push method is used to add new pairs of nodes from the two trees to the queue for subsequent comparison.

      // add LEFT AND RIGHT to the queue to be later traversed.
      queue.push([x.left, y.left]);
      queue.push([x.right, y.right]);
    } else return false;
  }
  return true;
};
