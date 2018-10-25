var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var rear = 0 ;
  var front = 0 ;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[rear] = value;
    rear ++ ;
  };

  someInstance.dequeue = function() {
    if (rear - front == 0){
      return false ;
    }
    var x = storage[front] ;
    delete storage[front];
    front ++ ;
    return x ;
  };

  someInstance.size = function() {
    return rear - front ;
  };

  return someInstance;
};
