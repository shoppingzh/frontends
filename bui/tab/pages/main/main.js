/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {},
        menus;

    // UI
    var uiTab;

    // 模块初始化定义
    pageview.init = function() {

        // 选项卡 js 初始化:
        uiTab = bui.tab({
            id:"#uiTab",
            menu: '#tabMenus',
            swipe: true,
            width: 0,
            height: 0,
            autoheight: true,
            autoload: true
        });
    }

    pageview.bind = function(){
        uiTab.on('to', function(index){
            console.log('当前页：' + index);
            switch (index){
                case 0:
                    loader.require('pages/main/home.js', function(module){
                        
                    });
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }
        });
    }

    

    // 初始化
    pageview.init();
    pageview.bind();

    uiTab.to(0);

    // 输出模块
    return pageview;
})
