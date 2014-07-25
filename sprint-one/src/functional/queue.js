var makeQueue = function(){
  var someInstance = {};
  var storage = {};
<<<<<<< HEAD

  // Implement the methods below
  someInstance.enqueue = function(value){
    var index = someInstance.size() > 0 ? someInstance.size() : 0;
    storage[index] = value;
  };

  someInstance.dequeue = function(){
    var index = Object.keys(storage)[0] || 0;
    
    if (storage[index] !== undefined) {
      var dequeued = storage[index];
      delete storage[index];
      return dequeued;
    }
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
=======
  var first = 0;
  var last = 0;
  var count = 0;

  someInstance.enqueue = function(value){
    storage[last] = value;
    last += 1;
    count += 1;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[first];
    delete storage[first];
    first += 1;
    count = count ? count - 1 : 0;
    return dequeued;
  };

  someInstance.size = function(){
    return count;
>>>>>>> solo
  };

  return someInstance;
};
