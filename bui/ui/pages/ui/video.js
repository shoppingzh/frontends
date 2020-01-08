loader.define({

    created: function(){
        
    },

    loaded: function(require, exports, module){
        var pageview = {};
        // UI
        var $page = router.$('.bui-page');

        var getParams = bui.getPageParams();
        getParams.done(function(result){
        
        })
        
    
        setTimeout(() => {
            console.log(videojs.getAllPlayers());
            
        }, 5000);

        pageview.init = function(){

        }

        pageview.bind = function(){

        }

        pageview.init();
        pageview.bind();

        return pageview;
    },

    show: function(e){
        console.log('show');
        var player = videojs(router.$(".bui-page").find('#video')[0], {
            language: 'zh-CN',
            controls: true,
            autoplay: false,                   // 不自动播放
            preload: true,
            fluid: true,                       // 宽高自适应
            controlBar: {
                pictureInPictureToggle: false, // 关闭画中画
                fullscreenToggle: false        // 关闭全屏
            }
        });
    }

});