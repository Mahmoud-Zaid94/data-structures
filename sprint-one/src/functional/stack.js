var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[last] = value;
    last += 1;
  };

  someInstance.pop = function(){
    var popped = storage[last - 1];
    delete storage[last - 1];
    last = last ? last - 1 : 0;
    return popped;
  };

  someInstance.size = function(){
    return last;
  };

  return someInstance;
};