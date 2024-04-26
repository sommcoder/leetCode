/**
 * 

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

// RECURSIVE solution
var getTargetCopy = function (original, cloned, target) {
  if (original == null) {
    // Base case aka stop condition
    // empty tree or empty node
    return null;
  }
  // General cases
  if (original == target) {
    // current original node is target, so is cloned
    return cloned;
  }
  // Either left subtree has target, or right subtree has target
  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
};

// DFS Solution:
var getTargetCopy = function (original, cloned, target) {
  function traverse(o, c) {
    if (!o) return;
    if (o === target) return c;
    return traverse(o.left, c.left) || traverse(o.right, c.right);
  }
  return traverse(original, cloned);
};

// BFS Solution:
// A queue is required to compare/access the nodes at each "level" of the tree
var getTargetCopy = function (original, cloned, target) {
  let queue = [[original, cloned]];

  while (queue.length) {
    const next = [];

    for (let [o, c] of queue) {
      if (o === target) return c;
      if (o.left) next.push([o.left, c.left]);
      if (o.right) next.push([o.right, c.right]);
    }
    queue = next;
  }
};
