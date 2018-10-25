var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.storage = {};
this.size1 = 0 ;
};

Stack.prototype.push = function(value){
  this.storage[this.size1] = value;
  this.size1 ++ ;
};

Stack.prototype.pop = function (){
  if (this.size1 == 0){
    return false ;
  }
  this.size1 --;
  var x = this.storage[this.size1];
  delete this.storage[this.size1];
  return x;
};

Stack.prototype.size = function (){
  return this.size1 ;
};
