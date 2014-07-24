var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var key = someInstance.size();
    storage[key] = value;
  };

  someInstance.pop = function(){
    var key = someInstance.size() ? someInstance.size() - 1 : 0;
    var popped = storage[key];
    delete storage[key];
    return popped;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};