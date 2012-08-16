Array.prototype.clone = function() {
    return this.slice(0);
}
Array.prototype.count = function() {
    return this.length;
}
Array.prototype.isEmpty = function() {
    return (0 === this.length);
}
Array.prototype.inArray = function(e) {
    for (var i in this){
        if (this[i]===e) return true;
    }
    return false;
}