/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {
        // 初始化数据行为存储
        var bs = bui.store({
            scope: "page",
            data: {
               visible: true
            },
            methods: {},
            watch: {},
            computed: {},
            templates: {},
            beforeMount: function(){
                // 数据解析前执行, 修改data的数据示例
                // this.$data.a = 2
            },
            mounted: function(){
                // 数据解析后执行
            }
        })
    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
