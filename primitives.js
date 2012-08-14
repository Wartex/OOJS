var Stack = Class.extend({
	_array: null,

	init: function() {
		this._array = new Array();
	},
	
	empty: function() {
		return (0 === this._array.length);
	},
	
	peek: function() {
		return (this.empty())
			? null
			: this._array[this._array.length - 1];
	},
	
	pop: function() {
		var value = this.peek();
		
		if (null !== value) {
			this._array = 
				this._array.splice(0, this._array.length-1);
		}
		
		return value;
	},
	
	push: function(value) {
		if (undefined === value) {
			throw new Error('Value parameter excepted!');
		}
		
		this._array.push(value);
		return this;
	},
	
	search: function(value) {
		if (undefined === value) {
			throw new Error('Value parameter excepted!');
		}
		
		for (var i in this._array) {
			if (this._array[i] === value) {
				return (this._array.length-i) - 1;  
			}
		}
		
		return -1;
	},
	
	toString: function() {
		return this._array.join(',');
	}
});