/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {
        loader.import([
            "http://www.jq22.com/demo/vide7.1.0201807161136/css/video-js.min.css",
            "http://www.jq22.com/demo/vide7.1.0201807161136/js/video.min.js"
        ], function(){
            var myPlayer = videojs(router.$("#video")[0]);
			videojs("my-video").ready(function(){
				var myPlayer = this;
				myPlayer.play();
			});
        })
    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
