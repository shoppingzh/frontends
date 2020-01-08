loader.define({

    loaded: function(r, e, m){
        var pageview = {};
        var uiList, uiInput, uiMoreSheet;
        var bs;
        var $container = router.$(".chatroom-main");

        pageview.init = function(){

            bs = bui.store({
                scope: "page",
                data: {
                   messages: [],
                   haveMore: true,
                   time: dayjs().format('YYYY-MM-DD')
                },
                methods: {},
                watch: {
                    messages: function(){
                        // 将消息滚动到最底部
                        
                        // console.log($container.prop('scrollHeight'))
                        // $container.animate({
                        //     scrollTop: $container.prop('scrollHeight') + 'px'
                        // }, 400);
                        console.log($container.prop('scrollHeight'))
                        // $container.scrollTop($container.prop('scrollHeight'));
                        setTimeout(() => {
                            
                            $container[0].scrollTop = $container.prop('scrollHeight');
                        }, 50);
                    }
                },
                computed: {},
                templates: {
                    tplChatroom: function(list){
                        return template('chat.art', { list: list });
                    }
                },
                beforeMount: function(){
                    // 数据解析前执行, 修改data的数据示例
                    // this.$data.a = 2
                },
                mounted: function(){
                    loadNew();
                    
                }
            })

            var curr = 2;
            var timer = setInterval(() => {
                loadNew(curr++);
                if(curr > 5){
                    clearInterval(timer);
                }
                bs.haveMore = false;
            }, 3000);

            uiInput = bui.input({
                id: "#uiInput",
                callback: function (e) {
                    // 清空数据
                    this.empty();
                }
            })


            function loadNew(page){
                bui.ajax({
                    url: `js/messages_${page || 1}.json`,
                    data: {}
                }).done(function(result){
                    bs.messages.$merge(result.data || [], 'name');
                });
            }

            uiMoreSheet = bui.dialog({
                id: "#uiMoreSheet",
                position: 'bottom',
                effect: 'fadeInUp',
                
            });
                            
            
        }

        router.$(".bui-page").on('keydown', '.input-box input[type="text"]', function(e){
            var $input = $(this);
            if(e.keyCode == 13){
                addNewMessage({
                    name: '老郑头',
                    avatar: '12.jpg',
                    content: uiInput.value()
                });
                // bs.messages.push({
                //     name: '老郑头',
                //     avatar: '12.jpg',
                //     content: uiInput.value()
                // });
                // uiInput.empty();
                // $this.blur();
            }
        });

        router.$(".bui-page").on('click', '#moreBtn', function(){
            uiMoreSheet.open();
        });

        // 图片的点击效果
        router.$('.bui-page').on('click', '.chatroom-inner img', function(){
            var src = $(this).attr('src');
            var uiDialog = bui.dialog({
                render: true,
            }).create({
                fullscreen: true,
                className: 'preview-dialog',
                title: null,
                content: `<div class="bui-box-align-middle" style="height: 100%; background: rgba(0, 0, 0, .85); padding: .04rem;"><img src="${src}" style="width: 100%"></div>`,
                buttons: null
            })
            uiDialog.selector().on('click', function(){
                uiDialog.close();
            })
            uiDialog.open();
        });

        // 文字的点击效果
        router.$('.bui-page').on('click', '.chatroom-inner .content.text', function(){
            var text = $(this).text();
            var uiDialog = bui.dialog({
                render: true,
            }).create({
                fullscreen: true,
                autoClose: false,
                className: 'preview-dialog',
                title: null,
                content: `<div class="bui-box-align-middle" style="height: 100%; padding: .04rem;"><div class="bui-align-center" style="width: 100%;">${text}</div></div>`,
                buttons: [{
                    name: 'A+',
                    value: "asc"
                }, {
                    name: 'A-',
                    value: 'desc'
                }],
                callback: function(e){
                    var $container = uiDialog.selector().find('.bui-dialog-main');
                    var fontSize = $container.css('font-size').replace('px', '');
                    var val = $(e.target).attr('value');
                    var newFontSize = Number(fontSize);
                    if(val == 'asc'){
                        if(newFontSize < 30){
                            newFontSize += 2;
                        }
                    }else{
                        if(newFontSize > 12){
                            newFontSize -= 2;
                        }
                    }
                    
                    $container.css('font-size', newFontSize + 'px');
                    e.preventDefault();
                    
                    return false;
                }
            })
            uiDialog.selector().find('.bui-dialog-main').on('click', function(){
                uiDialog.close();
            })
            uiDialog.open();
        });

        function addNewMessage(msg){
            bs.messages.push(msg);
            uiInput.empty();
            // router.$('.input-box input[type="text"]').blur();
            
            console.log($.fx)
            
        }

        pageview.init();

        return pageview;
    }

});