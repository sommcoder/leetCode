var isBalanced = function (root) {
  // A flag to check if the tree is balanced or not
  let flag = true;

  // pass te height to the recursive function:
  const getHeights = (node, height) => {
    if (!node) return 0;
    // in a binary tree there is ONLY LEFT and RIGHT
    let left = getHeights(node.left, height + 1);
    let right = getHeights(node.right, height + 1);
    // we perform a recursive DFS post order traversal:
    if (Math.abs(right - left) > 1) flag = false;

    return Math.max(left, right) + 1;
  };
  getHeights(root, 0);

  return flag;
};

var isBalanced = function (root) {
  /*
     
     we're going to need to keep track of the height of every subtree on every node, so we can ask the question 'Does my left or right tree differ in height by 1?'.
     
    */
  let dfs = function (node) {
    if (!node) return 0;
    let left = 1 + dfs(node.left);
    let right = 1 + dfs(node.right);
    // this is a post-order traversal
    // meaning we're reading values AFTER traversing
    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right);
  };

  return dfs(root) == Infinity ? false : true;
};

var isBalanced = function (root) {
  if (!root) return true;

  let height = function (node) {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  };

  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
