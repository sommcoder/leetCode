import { tree } from "../../info/implementation.mjs";
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
 * @return {string[]}
 */

// Here is one of the top solutions:
var binaryTreePaths = function (root) {
  // No node clause:
  console.log("root:", root);
  if (!root) return [];
  // Leaf Node clause:
  else if (root.left === null && root.right === null) return [`${root.val}`];
  else {
    // For all child paths add the root to their head one by one.
    // the ROOT is initiated as the start of each "path"

    let left = binaryTreePaths(root.left).map((x) => root.val + "->" + x);
    console.log();
    let right = binaryTreePaths(root.right).map((x) => root.val + "->" + x);

    // Each recursive call builds the array
    return [...left, ...right];
  }
};

// plot the tree:
tree.insert(1);
tree.insert(2);
tree.insert(7);
tree.insert(9);
tree.insert(8);
tree.insert(3);
tree.insert(4);

// console.log("pre: ", tree.preorderTraversalRec());
console.log("in: ", tree.inorderTraversalRec());
// console.log("post: ", tree.postorderTraversalRec());

console.log("binaryTreePaths(tree):", binaryTreePaths(tree.root));

/*
 
- The solution ensures that every path includes the root node by building each path starting from the root node and extending it downward through the children. Let's revisit the key part of the function:

let left = binaryTreePaths(root.left).map((x) => root.val + "->" + x);
let right = binaryTreePaths(root.right).map((x) => root.val + "->" + x);

Here’s what happens:

1) When the function is initially called with the root of the entire tree, it considers this node as the starting point of each path.

2) If the root node has children (i.e., it’s not a leaf node), the function makes recursive calls to find all paths starting from each child node (both left and right).

3) Each path returned from a child is then extended by prepending the current node’s value (root.val) followed by "->". This means that paths collected from the children are not standalone but are extended to include the current node as their new starting point.

4) The recursive nature of the function ensures that as each call returns to its caller, it extends the partial paths it receives by adding the current node at the beginning, eventually building up paths that start at the original root node.

 
*/

// var binaryTreePaths = function (root) {
//   const paths = [];

//   // build the array with each recursive call with the array parameter: path
//   function dfs(node, path) {
//     if (!node) return;
//     // push the node.val to the temp array
//     path.push(`${node.val}`);
//     // leaf node?
//     if (!node.left && !node.right) {
//       paths.push(path.join("->")); // connect each node.val with ->
//     } else {
//       // path.slice() just copies the current array and what's been added to it thus far!
//       dfs(node.left, path.slice()); // Copy the path array
//       dfs(node.right, path.slice()); // Copy the path array
//     }
//   }
//   // pass an empty array
//   dfs(root, []);
//   return paths;
// };
