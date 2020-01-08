loader.define(function(require,exports,module){

    var pageview = {};

    router.$(".bui-page").on('click', '#scoreBtn', function(){

        

        bui.score({
            // appendTo: router.$(".bui-page"),
            min: 20,
            max: 100,
            value: 10,
            step: 10,
            onChange: function(value){
                console.log('变化：' + value);
            },
            onScore: function(value){
                console.log('打分：' + value);
            }
        });
    });
    

    return pageview;
})