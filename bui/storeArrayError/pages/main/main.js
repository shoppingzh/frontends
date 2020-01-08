/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};
    var bs;

    // 模块初始化定义
    pageview.init = function() {

        bs = bui.store({
            scope: "page",
            data: {
               digitList: [],
               multi: 100,
            },
            methods: {},
            watch: {
                multi: function(newVal, oldVal){
                    // console.log('multi: ' + newVal);
                }
            },
            computed: {
                empty: function(){
                    return this.digitList.length <= 0;
                },
                invalid: function(){
                    return this.multi > 1000;
                }
            },
            templates: {},
            beforeMount: function(){
            },
            mounted: function(){
            }
        })

    }

    router.$(".bui-page").on('click', '#addBtn', function(){
        var rand = Math.random() * bs.multi;
        console.log(rand);
        bs.digitList.push(rand.toFixed(0));
    });

    router.$(".bui-page").on('click', '#emptyBtn', function(){
        bs.digitList.$empty();
    });

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
