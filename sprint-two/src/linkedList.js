var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head=== null){
      list.head=node;
    }
    if (list.tail !== null){
    list.tail.next=node;
  }
    list.tail=node;
  
  };

  list.removeHead = function() {
    if (list.head===null){
      return false;
    }
    var oldHead = list.head.value;
     list.head=list.head.next;
     return oldHead;


  };

  list.contains = function(target) {
    
    while( list.head!== null){
      if (target === list.head.value){
        return true;
      }
      list.head = list.head.next;
    }
  return false;
};
return list;
}

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
