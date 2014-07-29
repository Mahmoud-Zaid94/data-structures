var makeTree = function(value){
  var tree = Object.create(treeMethods);
  tree.value = value;
  tree.parent = null;
  tree.children = undefined;
  return tree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);

  node.parent = this;
  
  if (!this.children) {
    this.children = [];
  }

  this.children.push(node);
};

treeMethods.removeFromParent = function () {
  var children = this.parent.children;
  
  // remove from children in parent
  for (var i = 0; i < children.length; i++) {
    if (children[i].value === this.value) {
      children.splice(i,1);
    }
  }
  
  // remove reference to parent
  this.parent = null;
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }

  if (this.children)  {
    for (var i = 0; i < this.children.length; i++)  {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
*/
