loader.define(function(require,exports,module){

    var pageview = {},
        star = false;

    touch.on(router.$("main"), 'doubletap', function(e){
        
        // if(star){
        //     uiStar({
        //         icon: 'icons-star',
        //         position: e.position
        //     });
        // }else{
        //     uiStar({
        //         position: e.position
        //     });
        // }
        // star = !star;

        router.$(".bui-page").star({
            icon: 'icons-starfill',
            className: 'star',
            delay: 1000,
            position: [e.position.x, e.position.y],
            onClose: function(){
                console.log('已关闭');
            }
        });
        
    });

    function open() {
        
    }

    return pageview;
})