/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {

    }

    

    // 预加载页面
    router.preload({
        url: 'pages/routers/pre.html'
    });

    $('#route').on('click', function(){
        router.load({
            url: 'pages/routers/page.html'
        });
    });

    $('#route-param').on('click', function(){
        router.load({
            url: 'pages/routers/page.html',
            param: {
                name: 'zxp',
                age: 22
            }
        });
    });

    $('#route-pre').on('click', function(){
        router.load({
            url: 'pages/routers/pre.html'
        });
    });

    $('#route-part').on('click', function(){
        router.loadPart({id:"#part", url:"pages/routers/part.html"});
    });

    // 初始化
    pageview.init();


    

    // 输出模块
    return pageview;
})


