/*
 
- binary tree
- binary search trees
- full trees
- complete trees
- balanced trees

It's often easiest to use RECURSION because
a TREE is a RECURSIVE DATA STRUCTURE...

ie. each NODE typically has two sub-trees!

base case = deal with a leaf node (no more nodes to the left or right)

always handle the null case FIRST, null means there are no more children!!! 
 
*/

class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
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

class Tree {
  constructor() {
    this.root = null;
  }
  insert() {
    const newNode = new Node(value);
    if (this.root === null) {
      // if no root, assign to root
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    // inserts based on its relation to the parent node
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  findNode(value) {
    return this.searchNode(this.root, value);
  }
  // DFS variations:
  preorderTraversal(node = this.root, result = []) {
    if (!node) {
      result.push(node.value);
      this.preorderTraversal(node.left, result);
      this.preorderTraversal(node.right, result);
    }
    return result;
  }
  inorderTraversal(node = this.root, result = []) {
    if (!node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
  postorderTraversal(node = this.root, result = []) {
    if (!node) {
      this.postorderTraversal(node.left, result);
      this.postorderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }
  // BFS variations:
  recBFS() {}
  stackBFS(root) {
    // let queue = [root``];
  }
  invertTree(root) {
    if (!root) return root;
    invertTree(root.left);
    invertTree(root.right);
    // swap values by destructuring:
    [root.left, root.right] = [root.right, root.left];
    return root;
  }
  getDepth(root) {
    function countHeight(node) {
      if (!node) return 0;
      return 1 + Math.max(countHeight(node.left), countHeight(node.right));
    }
    return countHeight(root);
  }
  checkBalance() {}
  lowestCommonAncestor(node1, node2) {}
}

let tree = new Tree();

//       2
//     /   \
//    4     5
//   / \   / \
//  7   3 4
//         \
//          8

// Traditional DFS & BFS Methods

function DFS(root) {
  // push/pop on the stack:
  const stack = [root];

  while (stack.length) {
    stack.pop(); // get from end
    stack.push(); // add to end
  }
}
DFS(rootNode);

function BFS(root) {
  // push/shift on the queue:
  const queue = [root];
  while (queue.length) {
    queue.shift(); // get from start
    queue.push(); // add to end
  }
}
BFS(rootNode);

// Recursive DFS Method:
function DFSRec(node) {
  if (!node) return;
  console.log("DFS recursive:", node.val);
  DFSRec(node.left);
  DFSRec(node.right);
}

DFSRec(rootNode);

// run command:     Node tree/DFS-BFS.mjs
