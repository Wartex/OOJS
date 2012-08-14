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

var ExceptionStack = Iteratable.extend({
	_stack: null,
	_separator: null,
	
	init: function(stack){
		this._stack = stack;
		this._separator = '<br />';
	},
	
	setSeparator: function(separator){
		this._separator = separator;		
		return this;			
	},
	
	toArray: function() {
		return this._stack.split('@');
	},
	
	getIterator: function() {
		return new Enumeration(this);
	},
	
	toString: function() {
		var 
			result = new String('Stack: '),
			stack = this.getIterator();
	
		while(stack.hasNext()) {
			result += stack.next().concat(this._separator);
		}
		return result.toString();
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

var AbstractExceptionHandler = Class.extend({
	_error: null,
	
	init: function(error) {
		if (!(error instanceof Exception)) {
			throw new TypeMismatchException('Error should be an instanceof Exception', 500);
		}
		
		this._error = error;
	},
	
	getException: function() {
		return this._error;
	},
	
	draw: function() {
		throw new NotImplementedException('draw should be implemented', 500);
	}
});