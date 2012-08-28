var AbstractAjaxCommunicator = Class.extend({
    url: null,
    method: null,
    
    get: function() {
        throw new AbstractMethodException('get is an abstract method. implement it');
    },
    
    post: function() {
       
    }  
    
});