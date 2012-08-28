var AbstractAjaxCommunicator = Class.extend({
    url: null,
    method: null,
    _lastResult: null,
    
    fetch: function() {
        throw new AbstractMethodException('fetch is an abstract method. implement it');
    },
    
    getResult: function() {
        return this._lastResult;
    }
});