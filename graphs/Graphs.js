// build our own graph
class Graph {
    constructor(){
        this.numberOfNodes = 0
        this.adjacentlist = {}
    }

    addVertex(node){
        this.adjacentlist[node] = []
        this.numberOfNodes++
    }

    addEdge(node1, node2){
        this.adjacentlist[node1].push(node2)
        this.adjacentlist[node2].push(node1)
    }
}
