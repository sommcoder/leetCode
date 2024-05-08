/*
 
You are in a maze with 4 rooms, each with gold inside. Room A has 40 gold, B has 50, C has 75, and D has 100.

Each room is connected via a Path that costs a certain amount of gold to use. To determine how much gold you need to pay, complete that Path’s math equation and deduct its result (rounding up) from your total gold.

The Path equations are as follows:

Pathway AB: 2 + 3 * 4 - 5 / 10 + 5^2

Pathway AC: 2^3 + 4 * 5 - 6 /10 + 1

Pathway BC: 5 * 4 - 2 + 5^2 - 7

Pathway BD: 3 + 4 * 5 - 8 / 2 + 1

Pathway CD: 3^3 + 8 - 5 * 3 + 8

Your total gold cannot be reduced below zero, gold can only be gained once per room, and Paths can be used from either direction. Assuming you start in room A and exit in room D, determine the optimal route through the rooms to exit with the most treasure possible.

Your final answer must be the order of the rooms visited ie: ABC, ABD, etc.
 
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Method to add a vertex with a value
  addVertex(vertex, value) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = { edges: [], value: value };
    }
  }

  // Method to add an edge with a weight between two vertices
  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].edges.push({ node: v2, weight });
      this.adjacencyList[v2].edges.push({ node: v1, weight });
    }
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

function traverseGraph(root) {
  /*
     
    - complete the path's math equation and deduct its result (rounding up) from your total gold.
     

    - Start in A and end in D

    ACBD = $172


    */
}

// Answer should be: ABD = 80 gold
