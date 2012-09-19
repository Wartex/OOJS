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
    },
    
    add: function(value) {
        if (this.contains(value)) {
            return false;
        }
        
        this._array.push(value);
        return true;
    },
    
    addAll: function(value) {
        if (!(value instanceof Collection)) {
            throw new Error('Value must be an instance of Collection');
        }	

        var result = false;
        while(value.hasNext()) {
             result = true && this.add(value.next());
        }
        
        return result;
    }
});