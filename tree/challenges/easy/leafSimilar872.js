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
 * @return {boolean}
 */

// my original passing submission:
var leafSimilar = function (root1, root2) {
  // DFS or BFS? we just need to know the sequence of the
  // leaf level, so it may be of interest to drill down to the leaf
  // level on each tree and THEN compare them
  let seq1 = [];
  let seq2 = [];
  // DFS, starting left from the root node.
  // if leaf node, push to sequence array
  // just save the sequence of the

  // traverse both trees in their own separate recursive functions
  function DFS(node, tree) {
    // no more nodes:
    if (!node) return;

    // if leaf node:
    if (!node.left && !node.right) {
      if (tree === "first") seq1.push(node.val);
      if (tree === "second") seq2.push(node.val);
    }
    // traverse left first, to get the right sequence order
    DFS(node.left, tree);
    DFS(node.right, tree);
  }
  DFS(root1, "first");
  DFS(root2, "second");

  if (seq1.length !== seq2.length) return false;
  // check for sequence equivalency
  return seq1.every((el, i) => el === seq2[i]);
};

// Another submitted solution:
var leafSimilar = function (root1, root2) {
  const leafValues1 = [];
  const leafValues2 = [];

  const collectLeafValues = (root, leafValues) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      leafValues.push(root.val);
    }
    collectLeafValues(root.left, leafValues);
    collectLeafValues(root.right, leafValues);
  };

  collectLeafValues(root1, leafValues1);
  collectLeafValues(root2, leafValues2);

  return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};

//
var leafSimilar = function (root1, root2) {
  const dfs = (root) => {
    // If the current node is null, return an empty array
    if (root === null) {
      return [];
    }

    // Recursively explore the left and right children, and accumulate leaf values
    const leaves = dfs(root.left).concat(dfs(root.right));

    // If 'leaves' is empty, it means this is a leaf node, so return its value
    // Otherwise, it means this is an internal node and 'leaves' contains its subtree's leaves
    return leaves.length > 0 ? leaves : [root.val];
  };

  // Compare the leaf value sequences of both trees
  return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
};

var leafSimilar = function (root1, root2) {
  const dfs = (root) => {
    if (root === null) return [];
    const leaves = dfs(root.left).concat(dfs(root.right));
    return leaves.length > 0 ? leaves : [root.val];
  };

  return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
};
