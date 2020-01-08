loader.define(function(require,exports,module){

    var pageview = {};

    var $page = router.$(".bui-page");

    bui.tips({
        id: 'tips-page1',
        msg: '第一次进入的温馨提示',
        timeout: 3000,
        appendTo: $page
    });

    var uiInput = bui.input({
        id: "#uiInput",
        callback: function (e) {
            // 清空数据
            this.empty();
        }
    })

    router.$(".bui-page").on('click', '#doBtn', function(){
        bui.tips({
            msg: uiInput.value(),
            appendTo: $page,
            timeout: 0,
            onRecord: function(){
                console.log(this)
            }
        });
    });

    router.$(".bui-page").on('click', '#customBtn', function(){
        bui.tips({
            appendTo: $page,
            template: [function(){
                return `
                    <div class="bui-box-align-top" style="height: 100%;">
                        <p class="bui-align-center" style="width: 100%">第一步：点击</p>
                    </div>
                `;
            }, function(){
                return `
                    <div class="bui-box-align-middle" style="height: 100%;">
                        <p class="bui-align-center" style="width: 100%">第二步：再次点击试试</p>
                    </div>
                `;
            }, function(){
                return `
                    <div class="bui-box-align-bottom" style="height: 100%;">
                        <p class="bui-align-center" style="width: 100%">第三步：再点就关闭了哦</p>
                    </div>
                `;
            }]
        });
    });
    

    return pageview;
})