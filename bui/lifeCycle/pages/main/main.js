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

    pageview.bind = function(){
        router.$("#load").on('click', function(){
            router.load({
                url: 'pages/main/page.html'
            });
        });
        router.$("#replace").on('click', function(){
            router.replace({
                url: 'pages/main/page.html'
            });
        });
    }

    // 初始化
    pageview.init();
    pageview.bind();

    // 输出模块
    return pageview;
})
