var Exception = Class.extend({
    _error: null,
    _code: null,
	
    init: function(message, code) {
        this._error = new Error(message);
        this._code = code || 500;
    },
	
    getCode: function() {
        return new Number(this._code);
    },
	
    getMessage: function() {
        return new String(this._error.message);
    },
	
    getStack: function() {
        return new ExceptionStack(this._error.stack);
    },
	
    toString: function() {
        return this.getMessage().concat(' - ', this.getCode()).toString();
    }
});

var NotImplementedException = Exception.extend({
    getMessage: function() {
        return new String('NotImplemented: ').concat(this._super());
    }
});

var TypeMismatchException = Exception.extend({
    getMessage: function() {
        return new String('TypeMismatch: ').concat(this._super());
    }
});