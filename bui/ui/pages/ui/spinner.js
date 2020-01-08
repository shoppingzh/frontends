loader.define(function(require,exports,module){

    var pageview = {};
    var $page = router.$(".bui-page");

    var uiSpinner = bui.spinner({
        size: 35,
        color: 'orange',
        text: '局部内容加载中..',
        appendTo: $page.find('#container')
    })

    var uiSpinner2 = bui.spinner({
        size: 75,
        color: 'deeppink',
        text: null,
        appendTo: $page.find('main')
    })

    $page.on('click', '.bui-btn', function(){
        uiSpinner.show();
    })

    // setTimeout(() => {
    //     uiSpinner.hide();
    //     uiSpinner2.hide();
    // }, 3000);

    return pageview;
})