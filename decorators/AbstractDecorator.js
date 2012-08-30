var AbstractDecorator = Class.extend({
   _iterator: null,
   
   init: function(iteratable) {
       if (!(iteratable instanceof Iteratable)) {
           throw new TypeMismatchException('iteratable should be an instanceof Exception', 500);
       }
       
       this._iterator = iteratable.getIterator();
   },
   
   getIterator: function() {
       return this._iterator;
   },
   
   draw: function() {
       throw new AbstractMethodException('draw should be implemented', 500);
   }
});