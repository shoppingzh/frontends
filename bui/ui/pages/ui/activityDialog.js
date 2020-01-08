loader.define(function(require,exports,module){

    var pageview = {},
        uiDialog;

    pageview.init = function(){
        
        
    }

    pageview.bind = function(){
        router.$(".bui-page").on("click", '#openBtn', function(e){
            
            uiDialog = bui.dialog({
                render: true,
                title: ' ',
                content: template('uiActivityDialog.art', {}),
                position: 'center',
                effect: 'fadeInRight',
                buttons: [{
                    name: '取消',
                    value: 'cancel',
                    className: ''
                }, {
                    name: '进入',
                    value: 'enter',
                    className: 'success'
                }],
                callback: function (e) {
                    console.log(e);
                }
            }).create().open();

            console.log(uiDialog.widget())

        })
    }


    pageview.init();
    pageview.bind();

    return pageview;
})