// ! ALL ABOUT GRAPHS

/*
 
a data structure where a node can have ZERO or MORE adjacent nodes.
 
*/

class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbours = [];
  }
  addNeighbour(node) {
    this.neighbours.push(node);
  }
  getNeighbours() {
    return this.neighbours;
  }
  display() {
    console.log(
      `${this.value} -> ${this.neighbours
        .map(neighbour => neighbour.value)
        .join(', ')}`
    );
  }
}

class Graph {
  constructor() {
    this.nodes = new Map(); // Using a map to associate keys with nodes for quick access
  }

  addNode(value) {
    if (!this.nodes.has(value)) {
      const newNode = new GraphNode(value);
      this.nodes.set(value, newNode);
    }
  }

  addEdge(value1, value2) {
    let node1 = this.nodes.get(value1);
    let node2 = this.nodes.get(value2);
    if (node1 && node2) {
      node1.addNeighbor(node2); // Assumes a directed Graph
      // For undirected graph, add: node2.addNeighbor(node1);
    }
  }

  display() {
    for (let [value, node] of this.nodes) {
      const neighbors = node.neighbors.map(n => n.value).join(', ');
      console.log(`${value} -> ${neighbors}`);
    }
  }

  // Implement additional methods for BFS, DFS, finding shortest path, etc.
}
