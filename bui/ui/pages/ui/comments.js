loader.define(function(require,exports,module){

    var pageview = {};

    pageview.init = function(){
        bui.input({
            id: "#uiInput",
            callback: function (e) {
                this.empty();
            }
        })
    }

    pageview.init();

    return pageview;
})