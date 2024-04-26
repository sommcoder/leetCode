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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let q = [root];
  let ans = [];
  while (q.length) {
    let qlen = q.length;
    let row = 0; // row sum
    for (let i = 0; i < qlen; i++) {
      // essentially the q.length will be dynamic based on if there was 0-2 children pushed to the q array
      let curr = q.shift();
      row += curr.val;
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    // avg = sum / # of elements
    ans.push(row / qlen);
  }
  return ans;
};

/*
 
A problem talking about levels in a binary tree should immediately bring to mind a breadth-first search (BFS) approach. The classic BFS approach for a binary tree is to use a queue and push each queue entry's children onto the end of the queue. This way, the queue will run to the end of the row/level before moving onto the next level.

When a problem requires you to isolate a level, you can simply take the length of the queue at the start of the row and then once you've processed that many nodes from the queue, you'll know that you're ready to start the next row.

So as long as the queue exists, we'll take each row, sum the row's values (row), then divide by the length of the row (qlen) to find the average, pushing each average into our answer array (ans).
 
*/
