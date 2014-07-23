var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var index = someInstance.size() > 0 ? someInstance.size() : 0; // we want to push to an unused index
    storage[index] = value;
  };

  someInstance.pop = function(){
    var index = someInstance.size() > 0 ? someInstance.size() - 1 : 0; // need to set to 0 based index 

    if (storage[index] !== undefined) {
      var popped = storage[index];
      delete storage[index];
      return popped;      
    }

  };

  someInstance.size = function(){

    return Object.keys(storage).length;
  };

  return someInstance;
};