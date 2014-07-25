var makeLinkedList = function(){
  var list = {};
  var key = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    // if no nodes exist
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.head.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var oldhead = list.head;
    list.head = list.head.next;
    return oldhead.value;
  };

  list.contains = function(target){
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


