var Iteratable = Class.extend({
    toArray: function() {
        throw new AbstractMethodException('Implement toArray method');
    },

    getIterator: function() {
        throw new AbstractMethodException('Implement getIterator method');
    }
});