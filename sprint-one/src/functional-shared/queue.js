var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.front = 0;
  newQueue.rear = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.size = function (){
  return this.rear - this.front ;
};

queueMethods.enqueue = function (value){
  
  this.storage[this.rear] = value;
  this.rear ++ ;
};

queueMethods.dequeue = function (){
  if (this.rear - this.front == 0){
    return false ;
  }
  
  var x = this.storage[this.front];
  delete this.storage[this.front];
  this.front ++ ;
  return x;
  
};