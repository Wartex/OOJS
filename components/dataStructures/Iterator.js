var Iterator = Enumeration.extend({
    remove: function() {
        this._elements
        = this._elements.splice(this._current-1, 1);		
        return this;
    }
});