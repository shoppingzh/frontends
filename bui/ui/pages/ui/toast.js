loader.define(function(require,exports,module){

    var pageview = {};

    pageview.bind = function(){
        router.$(".bui-page").on('click', '#msg', function(){
            centermsg('消息通知');
        });
        router.$(".bui-page").on('click', '#succ', function(){
            centersucc('操作成功！');
        });
        router.$(".bui-page").on('click', '#warn', function(){
            centerwarn('操作异常！');
        });
        router.$(".bui-page").on('click', '#err', function(){
            centererr('操作失败！', function(){
                console.log('已关闭')
            });
        });
    }

    pageview.bind();

    return pageview;
})