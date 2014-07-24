var makeQueue = function(){
  var someInstance = {};
  var storage = {};
  var key;

  someInstance.enqueue = function(value){
    if (someInstance.size()) {
      key = parseInt(Object.keys(storage)[someInstance.size() - 1]) + 1;
    } else {
      key = 0;
    }
    storage[key] = value;
  };

  someInstance.dequeue = function(){
    var dequeued;
    key = Object.keys(storage)[0] || 0;
    dequeued = storage[key];
    delete storage[key];
    return dequeued;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
