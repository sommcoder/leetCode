/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {};

/*
 
UNION-FIND:
- Can be solved using Union-Find data structure, which is the classic approach for solving problems related to CONNECTIVITY in Graphs.


 
*/

// OOP solution:
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(u) {
    return this.parent[u] === u
      ? u
      : (this.parent[u] = this.find(this.parent[u]));
  }

  unionByRank(u, v) {
    let i = this.find(u);
    let j = this.find(v);
    if (i === j) return;
    if (this.rank[i] < this.rank[j]) {
      this.parent[i] = j;
    } else if (this.rank[i] > this.rank[j]) {
      this.parent[j] = i;
    } else {
      this.parent[i] = j;
      this.rank[j]++;
    }
  }
}

var validPath = function (n, edges, source, destination) {
  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    uf.unionByRank(u, v);
  }
  return uf.find(source) === uf.find(destination);
};

// more performant solution:
var validPath = function (n, edges, source, destination) {
  if (n === 1) return true;

  const stack = new Set([source]);
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < edges.length; i++) {
      if (stack.has(edges[i][0]) !== stack.has(edges[i][1])) {
        stack.add(edges[i][1]);
        stack.add(edges[i][0]);
        flag = true;
      }

      if (stack.has(destination)) return true;
    }
  }

  return false;
};

var validPath = function (n, edges, source, destination) {
  if (n === 1) return true;

  const stack = new Set([destination]);
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < edges.length; i++) {
      if (stack.has(edges[i][0]) !== stack.has(edges[i][1])) {
        stack.add(edges[i][1]);
        stack.add(edges[i][0]);
        flag = true;
      }

      if (stack.has(source)) return true;
    }
  }

  return false;
};

// slightly different implementation:
var validPath = function (n, edges, source, destination) {
  if (n === 1) return true;
  let visited = new Array(n).fill(false);
  visited[source] = true;
  let flag = true;
  while (flag) {
    flag = false;
    for (const edge of edges) {
      if (visited[edge[0]] !== visited[edge[1]]) {
        visited[edge[0]] = true;
        visited[edge[1]] = true;
        flag = true;
      }
      if (visited[destination]) return true;
    }
  }
  return false;
};

// a unique solution:
var validPath = function (n, edges, source, destination) {
  // find function:
  function find(u) {
    if (u === representatives[u]) return u;
    return find(representatives[u]);
  }
  // combine functionL
  function combine(x, y) {
    x = find(x);
    y = find(y);
    if (x === y) return;
    representatives[y] = x;
  }
  // track list:
  let representatives = [];

  for (let i = 0; i < n; i++) representatives[i] = i;
  for (let i = 0; i < edges.length; i++) combine(edges[i][0], edges[i][1]);

  return find(source) === find(destination) ? true : false;
};

/*
     
    - Create an adjacency list representation for our connected nodes
    - create a Set to store VISITED nodes
    - Run DFS (using adjacency list)
     
    */

var validPath = function (n, edges, start, end) {
  // Create a hashmap to be used as our adjacency list
  const graph = new Map();

  // Create a set to store our visited nodes
  const visited = new Set();

  // Build adjacency list (undirected)
  for (const [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    if (graph.has(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }

  // Define a recursive DFS helper
  function dfs(v) {
    // Add to visited set
    visited.add(v);
    // Get adjacent vertices
    const edges = graph.get(v);
    // For all adjacent vertices, run DFS
    if (edges && edges.length > 0) {
      for (const e of edges) {
        if (!visited.has(e)) dfs(e);
      }
    }
  }

  // DFS from starting input node
  dfs(start);

  // Return true/false if our visited set has our end node
  return visited.has(end);
};
