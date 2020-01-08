loader.define({

    loaded: function(){
        var pageview = {};
        printPageInfo();

        pageview.printMain = function(){
            printPageInfo();
        }

        return pageview;
    },

    show: function(){
    }

});