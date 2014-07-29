var BinarySearchTree = function(value){
  this.left  = undefined;
  this.right = undefined;
  this.value = value;
};

BinarySearchTree.prototype.insert = function (value) {
  var node = new BinarySearchTree(value);
  var direction = value < this.value ? 'left' : 'right';

  if (!this[direction]) {
    this[direction] = node;
  } else {
    this[direction].insert(value);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  var direction = value < this.value ? 'left' : 'right';

  if (this.value === value) {
    return true;
  } else  {
    if (this[direction] !== undefined)  {
      return this[direction].contains(value);
    }
  }
  
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  callback(this.value);
  
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.bredthFirstLog = function (callback) {
  // TODO!
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
