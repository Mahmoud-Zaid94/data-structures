

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
 // var element = this._storage.set(index,v);
 //for (var i = 0; i < this._storage.length; i++) {
  
 // if (index !== i){
 	this._storage.set(index, [k,v]);
  //}
  // else {
  // 	for (var j = 0; j < this._storage[j].length; j++) {
  
  // if (index !== j){
 	// this._storage.set(index, [k,v]);
  // }
  // }
//}               



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var x=this._storage.get(index);
 return x[1]
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//   var x= this._storage.get(index);
//   console.log(x)
// 	 this._storage.each(function(e,i,array){
//   		if (x === e){
//   			 console.log(e)
//   			this._storage[i].splice(i,2)
//   			// this._storage.get(index)
  			
//   			//   this._storage.splice(i,1)
//   			//  console.log(i,e,array)

//   	 	}
//   	 })
  	
  	

 };



/*
 * Complexity: What is the time complexity of the above functions?
 */


