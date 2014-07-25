var makeStack = function() {
<<<<<<< HEAD
	var instance = {};
	var storage  = {};

	instace.push = stackMethods.push;
	instace.pop  = stackMethods.pop;
	instace.size = stackMethods.size;

	return instace;
};

var stackMethods = {
	push: function (val) {
		// var index = this.size() > 0 ? this.size() : 0;
		// storage[index] = val;
	},
	pop: function () {
		// var index = this.size() > 0 ? this.size() - 1 : 0;
		// storage[index] = val;
	},
	size: function (obj) {
		// return Object.key(obj).length;
	}
=======
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.last = 0;
  return _.extend(someInstance, stackMethods);
};

var stackMethods = {
  push: function (value) {
    this.storage[this.last] = value;
    this.last += 1;
  },
  pop: function () {
    var popped = this.storage[this.last - 1];
    delete this.storage[this.last - 1];
    this.last = this.last ? this.last - 1 : 0;
    return popped;
  },
  size: function () {
    return this.last;
  }
>>>>>>> solo
};


