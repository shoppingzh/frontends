/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {
        // 列表控件 js 初始化: 
        var uiList = bui.list({
            id: "#uiList",
            url: "http://rap2api.taobao.org/app/mock/84605/example/getNews",
            pageSize:5,
            data: {},
            //如果分页的字段名不一样,通过field重新定义
            field: {
                page: "page",
                size: "pageSize",
                data: "data"
            },
            callback: function (e) {},
            template: function (data) {
                var html = "";
                data.map(function(el, index) {
        
                    html +=`<li class="bui-btn bui-box">
                        <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                        <div class="span1">
                            <h3 class="item-title">${el.name}</h3>
                            <p class="item-text">${el.address}</p>
                            <p class="item-text">${el.distance}公里</p>
                        </div>
                        <span class="price"><i>￥</i>${el.price}</span>
                    </li>`
                });
        
                return html;
            }
        });
    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
