class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// intuitive solution:
var sortedArrayToBST = function (nums, side) {
  if (!nums.length) return null;

  // every new node we must establish a new middle
  const mid = Math.floor(nums.length / 2);
  // the new middle becomes a new node and then because we know every
  const node = new TreeNode(nums[mid]);

  console.log(
    "mid index: ",
    mid,
    "value: ",
    node.val,
    "side: ",
    side || "root"
  );

  // subtrees are BSTs as well
  // we SLICE and pass the returned array to the function
  // this way EACH recursive call deals with it's own subarray!
  node.left = sortedArrayToBST(nums.slice(0, mid), "left");
  node.right = sortedArrayToBST(nums.slice(mid + 1), "right");

  return node;
};

/*
 
- Basically the array gets broken up into TWO sub arrays determined by the counter being thrown into EACH recursive function call

- 
 
*/

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
