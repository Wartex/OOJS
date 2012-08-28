var Enumeration = Class.extend({
    _elements: null,
    _current: null,	

    init: function(iteratableObject) {
        if (!iteratableObject instanceof Iteratable) {
            throw new Exception('Value must be an instance of Iteratable');
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