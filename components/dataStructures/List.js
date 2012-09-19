var List = Collection.extend({
   get: function(index) {
       return undefined === this._array[index] ? null : this._array[index];
   },
   
   add: function(index, value) {
       if (undefined === value) {
           return this._super(index);
       }
       
       if (index<0 || index > this.size()) {
           return false;
       }
       
       if (!this.contains()) {
           this._array.splice(index, 0, value);
           return true;
       }
       return false;
   },
   
   addAll: function(index, value) {
       if (undefined === value) {
           return this._super(index);
       }       
       
       if (index<0 || index > this.size()) {
           return false;
       }
       
       this._array.splice(index, 0, value);
       return true;       
   },
   
   set: function(index, value) {
       if (index<0 || index > this.size()) {
           return false;
       }
       
       this._array[index] = value;
       return true;
   },
   
   indexOf: function(value) {
       for (var i in this._array) {
           if (this._array[i] === value) {
               return i;
           }
       }
       
       return -1;
   }
});