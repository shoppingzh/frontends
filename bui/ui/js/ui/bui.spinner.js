(function(ui, $){

    ui.extend({
        name: 'spinner',
        config: {
            text: '加载中..',
            appendTo: ui.$('.bui-page'),
            autoTrigger: true
        },
        callback: function(opt){
            var that = this;
            var param = this.config;
            var id = bui.guid();
            var $container = ui.$(param.appendTo);
            var width = $container.width(), height = $container.height();
            $container.css({
                position: 'relative'
            });
            var $spinner = $(`
                <div id="${id}" class="bui-spinner bui-box-align-center bui-box-align-middle">
                    <div class="spinner">
                        <div class="orbit"></div>
                        <div class="orbit"></div>
                        <div class="orbit"></div>
                    </div>
                    <div class="text"></div>
                </div>
            `).css({
                position: 'absolute',
                width: '100%',
                top: height * .35,
            }).hide().appendTo(ui.$(param.appendTo));

            var uiMask = ui.mask({
                appendTo: param.appendTo,
                opacity: 0,
                autoTrigger: false
            });

            that.init = function(option){
                param = $.extend(true, {}, param, option);

                that.option('text', param.text);

                if(param.size > 0){
                    $spinner.find('.spinner').width(param.size).height(param.size);
                }
                if(param.color){
                    $spinner.find('.spinner .orbit').css('border-color', param.color);
                }

                if(param.autoTrigger){
                    that.show();
                }


                return that;
            }

            that.show = function(){
                $spinner.show();
                uiMask.show();
            }

            that.hide = function(){
                $spinner.fadeOut(100);
                uiMask.hide();
            }

            that.option = function(key, value){
                if(typeof key === 'object'){
                    
                }else{
                    if(key == 'text'){
                        setText(value);
                    }
                }
            }

            function setText(text){
                var $text = $spinner.find('.text');
                if(!text){
                    $text.hide();
                }
                $text.html(text);
            }

           


            return this.init(opt);
        }
    });

})(bui, window.libs);