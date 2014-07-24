var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function (value) {
  var key = this.size();
  this.storage[key] = value;
};

Stack.prototype.pop = function () {
  var key = this.size() ? this.size() - 1 : 0;
  var popped = this.storage[key];
  delete this.storage[key];
  return popped;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};
