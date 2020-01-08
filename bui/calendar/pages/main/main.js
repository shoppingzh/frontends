/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {

        var uiCalendar = calender({
            id: '#uiCalendar',
            date: new Date(),
            type: 'month',
            style: 'miui',
            pageHandler: true,
            pickerdateSelector: true,
            pageNum: 24,
            onMove: function(e){
                console.log(this)
                console.log('move');
            },
            onLoad: function(){
                console.log('load');
            },
            callback: function(e){
                if(uiCalendar){
                    uiCalendar.setStatus(1, uiCalendar.getDate());
                }
            }
        });

        
    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
