loader.define(function(require,exports,module){

    var pageview = {};

    bui.btn("#startBtn").submit(function(loading){
        setTimeout(() => {
            loading.hide();
            router.$(".main").hide();
            router.$(".blur-wrapper").removeClass('blur-wrapper');

            setTimeout(() => {
                bui.dialog({
                    render: true
                }).create({
                    title: '提示',
                    content: `
                        <div class="container-xy">
                            考试时间到，已自动提交。
                        </div>
                    `,
                    autoClose: false,
                    appendTo: router.$(".bui-page"),
                    callback: function(){
                        router.back();
                    }
                }).open();
            }, 1000);
        }, 2000);
    }, { text: '正在开始..' });

    return pageview;
})