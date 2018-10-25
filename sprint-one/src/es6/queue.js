class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0 ;
    this.rear = 0 ;
  }
 size(){
    return this.rear - this.front ;
  };
  
  enqueue(value){
    
    this.storage[this.rear] = value;
    this.rear ++ ;
  };
  
  dequeue(){
    if (this.rear - this.front == 0){
      return false ;
    }
    
    var x = this.storage[this.front];
    delete this.storage[this.front];
    this.front ++ ;
    return x;
    
  };
  
}
