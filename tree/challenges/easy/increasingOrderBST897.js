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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let newRoot = null;
  let newTree = null;

  const helper = (node) => {
    if (!node) return;
    // this drills us down to the bottom most left leaf
    helper(node.left);

    // read/visit
    // while reading/visiting the node update newRoot/newTree
    if (!newRoot) {
      // assign the newRoot to the newTree to the bottom-most left leaf
      newRoot = newTree = node;
    } else {
      newTree.right = node;
      newTree = newTree.right;
      // set left to null to avoid duplication
      // & to create skewed tree
      node.left = null;
    }
    // ONLY AFTER traversing the whole left subtree,
    // we then traverse the right subtree
    // right
    helper(node.right);
  };

  helper(root);
  return newRoot;
};

// alternative:
var increasingBST = function (root) {
  if (!root) {
    return root;
  }

  // drive down to the bottom left most leaf node
  // get that node
  const leftRoot = increasingBST(root.left);
  // assign root/node.left to null!
  root.left = null;
  root.right = increasingBST(root.right);

  if (!leftRoot) {
    return root;
  }

  let lastLeftNode = leftRoot;
  while (lastLeftNode.right) {
    lastLeftNode = lastLeftNode.right;
  }

  lastLeftNode.right = root;
  return leftRoot;
};

// recursive:
function increasingBST(root) {
  const dummyHead = new TreeNode();
  let temp = dummyHead;
  function inOrder(root) {
    if (!root) return;

    if (root.left) {
      inOrder(root.left);
    }

    temp.right = new TreeNode(root.val);
    temp = temp.right;

    if (root.right) {
      inOrder(root.right);
    }
  }

  inOrder(root);

  return dummyHead.right;
}

// ITERATIVE
function increasingBST(root) {
  if (!root) {
    return null;
  }

  let stack = [];
  let curr = root;

  const dummyHead = new TreeNode();
  let holdingPointer = dummyHead;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let temp = stack.pop();
      if (temp) {
        holdingPointer.right = new TreeNode(temp.val);
        holdingPointer = holdingPointer.right;
        curr = temp.right;
      }
    }
  }
  return dummyHead.right;
}
