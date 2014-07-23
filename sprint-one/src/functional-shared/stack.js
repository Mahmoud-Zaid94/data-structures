var makeStack = function() {
	var instance = {};
	var storage  = {};

	instace.push = stackMethods.push;
	instace.pop  = stackMethods.pop;
	instace.size = stackMethods.size;

	return instace;
};

var stackMethods = {
	push: function (val) {
		// var index = this.size() > 0 ? this.size() : 0;
		// storage[index] = val;
	},
	pop: function () {
		// var index = this.size() > 0 ? this.size() - 1 : 0;
		// storage[index] = val;
	},
	size: function (obj) {
		// return Object.key(obj).length;
	}
};


