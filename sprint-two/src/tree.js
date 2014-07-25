var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if (!this.children) {
    this.children = [];    
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target, node){
  node = node || this;
  if (node.value !== target) {
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        if (!this.contains(target, node.children[i])) {
          continue;
        } else {
          return true;
        }
      }
    }
  } else {
    return true;
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
*/


//tree.children => [{value: 5, children:[]}]
//tree.children[0]