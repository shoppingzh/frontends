/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {

    }

    function getUser(){
        return this.ajaxGetUser || (this.ajaxGetUser = bui.ajax({
            url: 'js/user.json1'
        }).done(function(result){
            console.log('内部done')
            console.log(result)
        }).fail(function(){
            console.log('内部失败')
        }));
    }

    router.$(".bui-page").on('click', '#failBtn', function(){
        getUser().fail(function(){
            console.log('用户捕捉失败')
        })
    });

    // var ajaxGet = bui.ajax({
    //     url: 'js/user.json',
    //     method: 'GET'
    // });
    
    // ajaxGet.done(function(result){
    //     console.log(result)
    // })

    // ajaxGet.done(function(result){
    //     console.log('第二次done:')
    //     console.log(result)
    // })

    // ajaxGet.done(function(result){
    //     console.log('第三次done:')
    //     console.log(result)
    // })

    // ajaxGet.then(function(result){
    //     console.log('then')
    //     console.log(result)
    // })

    getUser().done(function(result){
        console.log('获取到数据')
        console.log(result)
    })

    getUser().done(function(result){
        console.log('第二次获取数据')
        console.log(result)
    });

    setTimeout(() => {
        getUser().done(function(result){
            console.log('第三次获取数据')
            console.log(result)
        })
    }, 3000);

    getUser().fail(() => {
        console.log('捕捉失败1')
    });

    getUser().fail(function(){
        console.log('捕捉失败2')
    });

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
