var AjaxCommunicator = AbstractAjaxCommunicator.extend({
    _xhr: null,
    
    init: function() {
        var xhr = null;
        
        if (undefined !== typeof XMLHttpRequest){
            xhr = new XMLHttpRequest();
        } else {            
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP.6.0');
            } catch (e) {}
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (e) {}
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {}
            
            if (null === xhr) {
                throw new Exception('This browser does not support XMLHttpRequest');
            }

            this._xhr = xhr;
        }
    }
});