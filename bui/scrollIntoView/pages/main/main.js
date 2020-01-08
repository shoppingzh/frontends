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

    window.onresize = function(){
        bui.hint("提醒内容");
    }

    

    var $page = router.$(".bui-page");
    router.$(".bui-input").on("click",function(e){
        var $input = $(this);
        // 使用定时器是为了延迟计算
        setTimeout(function(){
            // bui.init({
            //     id: $page
            // })
            // bui.alert($input[0].scrollIntoView)
            // $page[0].scrollIntoView();
            $input[0].scrollIntoView();
        }, 5000);
    })

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
