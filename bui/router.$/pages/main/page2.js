loader.define({

    loaded: function(){
        var pageview = {};
        printPageInfo();

        router.$(".bui-page").on('click', '#backBtn', function(){
            router.back({
                callback: function(module){
                    if(module.printMain){
                        module.printMain();
                    }
                }
            });
        });
    },

    show: function(){
    }

});