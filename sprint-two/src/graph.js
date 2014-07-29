var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var nodeCount;
  var node = {};

  node.value = newNode;
  node.edges = {};
  this.nodes[newNode] = node;

  if (toNode) {
    this.addEdge(newNode, toNode);
  }

  nodeCount = 0;

  for (var key in this.nodes) {
    if (this.nodes.hasOwnProperty(key)) {
      nodeCount += 1;
    }

    if (nodeCount === 2) {
      break;
    }
  }

  if (nodeCount === 2){ 
    this.addEdge(newNode, Object.keys(this.nodes)[0]);
  }
  
};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? this.nodes[node].value === node : false;
};

Graph.prototype.removeNode = function(node){
  for (var key in this.nodes[node].edges) {
    this.removeEdge(node, key);
  }

  delete this.nodes[node];
  
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode].edges[toNode] === toNode && this.nodes[toNode].edges[fromNode] === fromNode;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = toNode;  
  this.nodes[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.nodes[fromNode]) {
    delete this.nodes[fromNode].edges[toNode];
    if (Object.keys(this.nodes[fromNode].edges).length === 0){
      this.removeNode(fromNode);
    }
  }

  if (this.nodes[toNode]) {
    delete this.nodes[toNode].edges[fromNode];
    if (Object.keys(this.nodes[toNode].edges).length === 0){ 
      this.removeNode(toNode);    
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
