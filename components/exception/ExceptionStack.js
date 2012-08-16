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