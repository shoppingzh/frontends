var pi = 3.1415926;

function area(r){
    return pi * r * r;
}

var b = (function(){

    var pi = 3.1415926;

    return {
        area: function(r){
            return pi * r * r;
        }
    }

})()