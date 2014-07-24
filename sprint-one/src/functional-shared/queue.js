var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, queueMethods);

};

var queueMethods = {
  enqueue: function (val) {
    var keys;
    if (this.size()) {
      key = (Object.keys(this.storage)[this.size() - 1]) + 1;  
    } else {
      key = 0;
    }
    this.storage[key] = val;
  },
  dequeue: function () {
    var dequeued;
    var keys;
    key = Object.keys(this.storage)[0] || 0;
    dequeued = this.storage[key];
    delete this.storage[key];
    return dequeued;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};



