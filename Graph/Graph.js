class Graph {
    constructor() {
        this.numberOfNode = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNode++;
        return this;
    }

    addEdge(node1, node2) {
        if(this.adjacentList[node1] && this.adjacentList[node2]) {
            this.adjacentList[node1].push(node2);
            this.adjacentList[node2].push(node1);
            return this;
        }
        return false;
    }
}

let myGraph = new Graph();

myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);

myGraph.addEdge(1,2);
myGraph.addEdge(2,3);
myGraph.addEdge(3,4);
myGraph.addEdge(1,4);

console.log(myGraph);
