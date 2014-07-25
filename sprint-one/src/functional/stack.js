var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;

  // Implement the methods below
  someInstance.push = function(value){
<<<<<<< HEAD
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
=======
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
>>>>>>> solo
  };

  return someInstance;
};