class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.size1 = 0 ;
  }

push (val){
    this.storage[this.size1] = val;
    this.size1 ++ ;
};

pop (){
  if (this.size1 == 0){
    return false ;
  }
  this.size1 --;
  var x = this.storage[this.size1];
  delete this.storage[this.size1];
  return x;
};

size (){
  return this.size1 ;
};
}