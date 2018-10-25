var BinarySearchTree = function(value) {
   var instance = Object.create(BinarySearchTree.prototype);
     instance.value = value;
     instance.right;
     instance.left ;
   return instance
 };

 BinarySearchTree.prototype.insert = function (value) {
   var node = BinarySearchTree(value);
   function recursive (BinarySearchTree) {
     if (BinarySearchTree.value > value && BinarySearchTree.left === undefined) {
       BinarySearchTree.left = node;
     } else if (BinarySearchTree.value > value) {
       recursive (BinarySearchTree.left);
     } else if (BinarySearchTree.value < value && BinarySearchTree.right === undefined) {
       BinarySearchTree.right = node;
     } else if (BinarySearchTree.value < value) {
       recursive (BinarySearchTree.right);
     }
   }
   recursive (this);
 }

 BinarySearchTree.prototype.contains = function (value) {
   var contain = false;
   function recursive (BinarySearchTree) {
     if (BinarySearchTree.value === value) {
       contain = true;;
     } else if (BinarySearchTree.left !== undefined && value < BinarySearchTree.value) {
       recursive (BinarySearchTree.left);
     } else if (BinarySearchTree.right !== undefined && value > BinarySearchTree.value) {
       recursive (BinarySearchTree.right)
     }
   }
   recursive (this);
   return contain;
 }

 BinarySearchTree.prototype.depthFirstLog = function (callback) {
   function recursive (BinarySearchTree) {
     callback.call(BinarySearchTree, BinarySearchTree.value)
     if (BinarySearchTree.left !== undefined) {
       recursive (BinarySearchTree.left)
     }
     if (BinarySearchTree.right !== undefined) {
       recursive (BinarySearchTree.right);
     }
   }
   recursive (this);
 }

/*
* Complexity: What is the time complexity of the above functions?
*/