var AbstractDomModel = AbstractModel.extend({
    _dom: null,
   _eventListener: null,
   
    setDom: function(dom) {
        this._dom = dom.get(0);
        this._dom.__model = this;
        return this;
    },
    
    setEventListener: function(listener) {
        this._eventListener = listener;
        return this;
    },
    
    detach: function() {
        if (this.hasDom()) {
            delete this._dom.__model;
        }
        
        return this;
    },
   
    getDom: function() {
        return this._dom;  
    },
   
    hasDom: function() {
        return null !== this._dom;
    },
    
    hasModel: function() {
        return null !== this._dom.__model;
    }
});