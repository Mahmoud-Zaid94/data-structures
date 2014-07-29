var makeLinkedList = function(){
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      var oldTail = list.tail;
      list.tail.next = node;
      list.tail = node;
      list.tail.prev = oldTail;

      return oldTail.value;
    }
  };

  list.addToHead = function (value) {
    var node = makeNode(value);
    var oldHead = list.head;

    list.head = node;
    list.head.next = oldHead;

    oldHead.prev = node;
  };

  list.removeHead = function(){
    var oldhead = list.head;
    list.head = list.head.next;

    if (list.head) {
      list.head.prev = null;
    }

    return oldhead.value;
  };

  list.removeTail = function() {
    list.tail = list.tail.prev;
    list.tail.next = null;
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

