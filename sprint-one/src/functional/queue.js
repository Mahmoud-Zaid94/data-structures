var makeQueue = function(){
  var someInstance = {};
  var storage = {};
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
  };

  return someInstance;
};
