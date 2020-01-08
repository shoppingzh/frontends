loader.define(function(require,exports,module){

    var pageview = {};

    var uiActionsheet = bui.actionsheet({
        trigger: "#btnOpen",
        buttons: [{ name:"分享到微博",value:"weibo" }],
        callback: function (e) {
            var val = $(e.target).attr("value");
            if( val == "cancel"){
                this.hide();
            }
        }
    })

    return pageview;
})