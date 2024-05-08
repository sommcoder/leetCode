/**
 * @param {number[][]} edges
 * @return {number}
 */

/*
 
Since the given data is exactly a star graph which means there must be the same node in every edge.
So we don't need to take care of every edge but only 2 edges that we could get the answer to.

When we got this, then here's the code to read easily:
 
*/

// easy answer:
const findCenter = edges => {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};

const findCenter = edges =>
  edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1]
    ? edges[1][0]
    : edges[1][1];

/*
 
Explanation:
You don't need to iterate over the entire array, if the center of the star must be connected with all nodes, you just need to check what value appears in both edge[0] and edge[1].
 
*/
var findCenter = function (edges) {
  const [p1, p2] = edges[0];
  const [p3, p4] = edges[1];
  return p1 == p3 || p1 == p4 ? p1 : p2;
};
