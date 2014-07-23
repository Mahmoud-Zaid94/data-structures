var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

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
  };

  return someInstance;
};
