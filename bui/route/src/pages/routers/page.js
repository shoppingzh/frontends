loader.define(function(require,exports,module){

    console.log(module);

    var pageview = {};

    // 接收上一个页面传递的参数
    var param = router.getPageParams();
    $('#paramShow').text('我接收到参数：' + JSON.stringify(param));

    loader.define({
        show: function(){
            console.log('show');
        }
    })

    return pageview;
})
