var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.last = 0;

  return someInstance;
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
};


