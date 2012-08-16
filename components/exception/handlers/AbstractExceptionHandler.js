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