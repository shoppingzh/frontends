/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {

        // 级联菜单 js 初始化:
        var uiLevelSelect = bui.levelselect({
           data: [{
            "n":"北京",
            "c":[{"a":["城区","城区以外"],"n":"密云区"}]
            }],
           title: "所在地区",
           trigger: ".selected-val",
           level: 3,
           field:{
               name: "n",
               data: ["c","a"],
           },
           autoClose: true
        })
        
        $("#chooseCity").on("click",function (e) {
            uiLevelSelect.show();
        })
        
    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
