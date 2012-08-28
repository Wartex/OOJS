var Poll = AbstractModel.extend({
   _ajaxCommunactor: null,
   delay: null,   
   _started: false,
   
   init: function(ajaxCommunactor) {
       if (!(ajaxCommunactor instanceof AbstractAjaxCommunactor)) {
           throw new TypeMismatchException('ajaxCommunactor should be an instanceof AbstractAjaxCommunactor');
       }
       this._ajaxCommunactor = ajaxCommunactor;
   },
   
   start: function() {
       if (this._started) {
           return;
       }
       
       this._started = true;
       
   },
   
   poll: function() {
      window.setTimeout(
        // function() {
        // his._ajaxCommunicator.fetch();
        // trigger('polled')
        // }
        // this.delay
         
      );      
   },
   
   stop: function() {
       this._started = false;
   }
});