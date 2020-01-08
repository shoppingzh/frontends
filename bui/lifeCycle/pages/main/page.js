loader.define({

    beforeCreate: function(){
        console.log('beforeCreate');
    },

    created: function(){
        console.log('created');
    },

    beforeLoad: function(){
        console.log('beforeLoad');
    },

    loaded: function(r, e, m){
        console.log('loaded');
    },

    show: function(e){
        console.log('show');
    },

    hide: function(){
        console.log('hide');
    },

    beforeDestroy: function(){
        console.log('beforeDestroy');
    },

    destroyed: function(){
        console.log('destroyed');
    }

});