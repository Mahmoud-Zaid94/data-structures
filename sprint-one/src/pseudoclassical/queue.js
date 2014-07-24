var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  
};

Queue.prototype.enqueue = function (val) {
  var keys;
  if (this.size()) {
    key = (Object.keys(this.storage)[this.size() - 1]) + 1;  
  } else {
    key = 0;
  }
  this.storage[key] = val;
};

Queue.prototype.dequeue = function () {
  var dequeued;
  var keys;
  key = Object.keys(this.storage)[0] || 0;
  dequeued = this.storage[key];
  delete this.storage[key];
  return dequeued;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};