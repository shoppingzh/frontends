loader.define({

    loaded: function(r, e, m){
        var pageview = {};

        pageview.init = function(){
            // 这里写控件、页面内容初始化的代码
        }

        pageview.bind = function(){
            // 这里写页面所有元素的事件绑定代码
            // 为什么要将init、bind分开？
            // init、bind都是模块抛出的方法，这些方法可能被其它模块调用，如果将初始化(init)与事件绑定(bind)的代码混在一起，
            // 其它模块在调用该模块的初始化方法时就会造成此模块元素事件的重复绑定(调用几次就重复绑定几次)
            // 并且，BUI的例程中也都是init/bind分离的模式
        }

        // 这两个方法的调用顺序没有那么重要，因为事件绑定只是作绑定操作，并没有真正触发，所以init实际上永远会执行在前
        // 一般来说，inti在前，bind在后
        pageview.init();
        pageview.bind();


        // 你也可以继续抛出其他方法，如一个局部刷新的方法：
        pageview.refreshPart = function(){
            // ...
        }

        // 这里是将pageview给当前的对象，这样在下方的show方法就可以通过this.pageview获取到当前模块了
        this.pageview = pageview;
        // 此代码的作用是将模块抛出供其他模块使用
        return pageview;

    },

    show: function(e){
        // 页面展示后需要触发的一些操作
        // 如需要模块的局部刷新方法，可以这么调用：
        this.pageview.refreshPart();
    }

});