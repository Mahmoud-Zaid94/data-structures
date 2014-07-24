var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.last  = 0;
  someInstance.first = 0;
  someInstance.count = 0;

  return someInstance;
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
    this.first += 1;
    this.count = this.count ? this.count - 1 : 0;
    return dequeued;
  },
  size: function () {
    return this.count;
  }
};


