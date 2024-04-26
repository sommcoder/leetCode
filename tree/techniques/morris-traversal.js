function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function morrisTraversal(root) {
  let current = root; // a reference to root

  let output = []; // to store the traversal result

  // current gets reassigned to the new node
  // Function also keeps tracker and reassigns a predecessor through outthe function
  while (current != null) {
    if (current.left === null) {
      output.push(current.val); // visit the node
      current = current.right; // move to right child
    } else {
      // Find the inorder predecessor of current
      let predecessor = current.left;
      while (predecessor.right !== null && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      // Make current as the right child of its inorder predecessor
      if (predecessor.right === null) {
        predecessor.right = current;
        current = current.left;
      } else {
        // Revert the changes made in the 'if' part to restore the original tree
        // i.e., fix the right child of predecessor
        predecessor.right = null;
        output.push(current.val); // visit the node
        current = current.right; // move to right child
      }
    }
  }
  return output;
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

/*
 
  1
   \
    2
    /
   3
 
*/
console.log(morrisTraversal(root)); // Output should be [1, 3, 2]
