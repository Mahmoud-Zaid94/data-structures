var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.count = 0;
  return _.extend(someInstance, queueMethods);
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.last] = value;
    this.last += 1;
    this.count += 1;
  },
  dequeue: function () {
    var dequeued = this.storage[this.first];
    delete this.storage[this.first];
    this.count = this.count ? this.count - 1 : 0;
    this.first += 1;
    return dequeued;
  },
  size: function () {
    return this.count;
  }
};



