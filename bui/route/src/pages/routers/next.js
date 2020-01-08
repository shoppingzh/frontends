loader.define(function(require,exports,module){

    var pageview = {};

    $('#back').on('click', function(){
        router.back();
    });

    $('#back2').on('click', function(){
        router.back({
            index: -2
        });
    });

    $('#back-home').on('click', function(){
        router.back({
            name: 'main'
        });
    });

    return pageview;
})