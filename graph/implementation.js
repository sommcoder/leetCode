/*
 
Graph vs Tree


The primary difference is that trees are top/down hierarchical structures

Trees are in fact a type of Graph


Unlike trees, graphs can have cycles, multiple edges between the same pair of nodes and nodes WITHOUT a parent-child relationship.

Graphs are usually implemented to represented Interconnected relationships like a friend/follow network on a social media site.


Tree = always has n-1 edges if there are n nodes, which ensures there are no cycles and the graph is connected!

Graphs = can have any number of edges, and its connectivity is NOT guaranteed


* Graph Traversal:
DFS = involves checking for previously visited nodes to AVOID infinite loops due to cycles

BFS = more useful for finding the SHORTEST PATH in UNWEIGHTED graphs


! Graph DFS:
* Cycle handling
in graphs, the main difference lies in handling cycles by maintaining a 'visited' set to track which nodes have been explored. This is critical to avoid an infinite loop

In trees the base case is there are no more nodes to traverse. node.left and node.right return NULL

In Graphs, especially bidirectional ones, one could keep traversing indefinitely.

Trees, typically being less dense and structured in a hierarchical manner, less frequently encounter deep recursion issues.



 
*/

class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbours = [];
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
    this.neighbours = [];
  }

  // Method to add a vertex with a value
  addVertex(vertex, value) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = { edges: [], value: value };
    }
  }

  bfs(startNode) {
    let queue = [startNode];
    let visited = new Set();
    visited.add(startNode);

    while (queue.length) {
      // take node from [0]
      let currNode = queue.shift();
      // traverse the array of connections:
      currNode.neighbours.forEach(neighbour => {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      });
    }
  }

  dfs(node, visited = new Set()) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node.value); // process here
    // process the n
    node.neighbours.forEach(neighbour => dfs(neighbour, visited));
  }

  isPath() {
    // challenge: 1971
  }

  dijkstra() {
    // go to method for finding the shortest path from a single source node to ALL other nodes in a graph with NON-NEGATIVE edge weights.

    // the algorithm uses a PRIORITY QUEUE to GREEDILY select the next vertex with the minimal distance; it then updates the path lengths to its neighbouring vertices and continues this process until all vertices are visited.
    const distances = {};
    const prev = {};
    const priorityQueue = [];
    // ? we implement Dijkstra’s Algorithm using a priority queue based on an array (which is then sorted after each insertion for simplicity, though more efficient implementations would use a binary heap for the priority queue

    // Initialization: set distances to Infinity and enqueue all nodes
    this.nodes.forEach((_, node) => {
      distances[node] = node === start ? 0 : Infinity;
      prev[node] = null;
      priorityQueue.enqueue(node, distances[node]);
    });

    while (!priorityQueue.isEmpty()) {
      let { value: currentNode } = priorityQueue.shift();
      this.nodes.get(currentNode).forEach(neighbor => {
        let alt = distances[currentNode] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          prev[neighbor.node] = currentNode;
          priorityQueue.push(neighbor.node, alt);
          priorityQueue.sort(); // this can't be efficient?
        }
      });
    }

    return { distances, prev };
  }

  bellmanFord() {
    // for possible negative weight edges (but no negative weight cycles)
    // slower but more versatile than dijkstras
  }

  // Method to add an edge with a weight between two vertices
  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].edges.push({ node: v2, weight });
      this.adjacencyList[v2].edges.push({ node: v1, weight });
    }
  }

  unionFind() {
    // * also called Disjoint Set Union
    /*
 
Union by Rank and Path Compression optimizations, is a key data structure used primarily for handling the union and find operations on DISJOINT SETS.

! UnionFind Operations:
* Find:
determines which subset a particular element is in. This can be used to determine if two elements are in the SAME subset.

* Union:
JOIN two subsets into a single subset

! Union by Rank:
* Rank:
This is roughly the DEPTH of the tree representing the set. Instead of blindly appending one set to another during the UNION/COMBINE operation, we attach the "shorter" tree under the "taller" tree. This prevents the tree structure from becoming too skewed, keeping operations closer to constant time.
 
* Path Compression:
During the find operation, we make the tree FLATTER by making every node POINT directly to the root. This drastically reduces the PATH LENGTH for future operations.



*/
  }

  kruskalsMST() {
    //  * Find the MST (minimal spanning tree) of a graph!
    // uses union-find to select edges that DO NOT form a cycle (checking with the connected function) and gradually builds the MST by uniting nodes.
    /*
    ! MST
    A minimum spanning tree (MST) or minimum weight spanning tree is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight.
     
    */
  }

  // Method to remove an edge between two vertices
  removeEdge(v1, v2) {
    this.adjacencyList[v1].edges = this.adjacencyList[v1].edges.filter(
      edge => edge.node !== v2
    );

    this.adjacencyList[v2].edges = this.adjacencyList[v2].edges.filter(
      edge => edge.node !== v1
    );
  }

  // Method to remove a vertex and all its connected edges
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].edges.length) {
      const adjacentVertex = this.adjacencyList[vertex].edges.pop().node;
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();

// add nodes/vertices and their 'gold' once traversed:
graph.addVertex('A', 40);
graph.addVertex('B', 50);
graph.addVertex('C', 75);
graph.addVertex('D', 100);
// add edges/connections:s
graph.addEdge('A', 'B', 39); // round up
graph.addEdge('A', 'C', 29); // round up
graph.addEdge('B', 'C', 36);
graph.addEdge('B', 'D', 20);
graph.addEdge('C', 'D', 28);

console.log('graph.adjacencyList:', graph.adjacencyList);
console.log('graph.adjacencyList.A:', graph.adjacencyList.A);
console.log('graph.adjacencyList.B:', graph.adjacencyList.B);
console.log('graph.adjacencyList.C:', graph.adjacencyList.C);
console.log('graph.adjacencyList.D:', graph.adjacencyList.D);
