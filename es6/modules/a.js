var pi = 3.14;

function primeter(r){
    return pi * 2 * r;
}

var a = (function(){

    var pi = 3.14;
    
    return {
        primeter: function(r){
            return pi * 2 * r;
        }
    }

})();