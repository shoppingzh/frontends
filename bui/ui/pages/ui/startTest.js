loader.define(function(require,exports,module){

    var pageview = {};

    bui.btn("#startBtn").submit(function(loading){
        setTimeout(() => {
            loading.hide();
            router.$(".main").hide();
            router.$(".blur-wrapper").removeClass('blur-wrapper');
        }, 2000);
    }, { text: '正在开始..' });

    return pageview;
})