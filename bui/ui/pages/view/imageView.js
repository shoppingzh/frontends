loader.define(function(require,exports,module){

    var pageview = {};

    

    router.$("img").on('click', function(){
        var src = $(this).attr('src');
        uiImageView = bui.imageview({
            src: src
        });
    });

    return pageview;
})