var AbstractModel = Class.extend({
    
    get: function(propertyName) {
        if (undefined === this[propertyName]) {
            throw new Exception('Getter cant find property: ' + propertyName);
        }
        
        return this[propertyName];
    },
    
    set: function(propertyName, value) {
        if (undefined === this[propertyName]) {
            throw new Exception('Setter cant find property: ' + propertyName);
        }
        if (undefined === value) {
            throw new Exception('Setter value is required');
        }
        
        this[propertyName] = value;
    }    
});