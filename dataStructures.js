Array.prototype.clone = function() { return this.slice(0); }
Array.prototype.count = function() { return this.length; }
Array.prototype.isEmpty = function() { return (0 === this.length); }
Array.prototype.inArray = function(e) { for (var i in this){if (this[i]===e) return true;} return false; }

var Enumeration = Class.extend({
	_elements: null,
	_current: null,
	
	init: function(iteratableObject) {
		if (!iteratableObject instanceof Iteratable) {
			throw new Error('Value must be an instance of Iteratable');
		}
		
		this._current = 0;
		this._elements = iteratableObject.toArray().clone();
	},
	
	hasNext: function() {
		return (this._current < this._elements.count());
	},
	
	next: function() {
		var item = (undefined === this._elements[this._current]) 
			? null
			: this._elements[this._current];
			
		this._current++;
		return item;
	}	
});

var Iterator = Enumeration.extend({
	remove: function() {
		this._elements
			= this._elements.splice(this._current-1, 1);		
		return this;
	}
});

var Iteratable = Class.extend({
	toArray: function() {
		throw new Error('Implement toArray method');
	},
	getIterator: function() {
		throw new Error('Implement getIterator method');
	}
});

var Stack = Class.extend({
	_array: null,

	init: function() {
		this._array = new Array();
	},
	
	isEmpty: function() {
		return this._array.isEmpty();
	},
	
	peek: function() {
		return (this.empty())
			? null
			: this._array[this._array.count() - 1];
	},
	
	pop: function() {
		var value = this.peek();
		
		if (null !== value) {
			this._array = 
				this._array.splice(0, this._array.count()-1);
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
				return (this._array.count()-i) - 1;  
			}
		}
		
		return -1;
	},
	
	toString: function() {
		return this._array.join(',');
	}
});

/**
* NOT TESTED
*/
var Collection = Iteratable.extend({
	_array: null,
	
	init: function() {
		this.clear();				
	},
	
	toArray: function() {
		return this._array;		
	},
	
	getIterator: function() {
		return new Iterator(this);			
	},
	
	clear: function() {
		this._array = new Array();
		return this;
	},
	
	isEmpty: function() {
		return this._array.isEmpty();		
	},
	
	contains: function(value) {
		return this._array.inArray(value);
	},
	
	containsAll: function(value) {
		if (!(value instanceof Collection)) {
			throw new Error('Value must be an instance of Collection');
		}
		
		var result = false;
		
		while(value.hasNext()) {
			result = this.contains(value.next());
		}
		
		return result;
	},
	
	remove: function(element) {
		for (var i in this._array) {
			if (element === this._array[i]) {
				this._array = this._array.splice(i, 1);
				return true;
			}
		}
		
		return false;
	},
	
	removeAll: function(value) {
		if (!(value instanceof Collection)) {
			throw new Error('Value must be an instance of Collection');
		}
		
		var result = false;
		
		while(value.hasNext()) {
			result = this.remove(value.next());
		}
		
		return result; 
	},
	
	size: function() {
		return this._array.count();
	},
	
	equals: function(value) {
		if (!(value instanceof Collection)) {
			throw new Error('Value must be an instance of Collection');
		}	
		
		while(value.hasNext()) {
			if (!this._array.inArray(value.next())) {
				return false;				
			}
		}		
		
		return true;
	}
});