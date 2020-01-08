(function(ui, $){

    "use strict";

    ui.extend({
        name: 'score',
        config: {
            title: '打分',
            className: '',
            min: -100,
            max: 100,
            value: 0,
            step: 1,
            appendTo: '.bui-page',
            onChange: function(value){ },
            onScore: function(value){ }
        },
        callback: function(){
            var that = this, config = this.config;
            var uiDialog, uiNumber;
            var numberId = bui.guid();

            that.init = function(options){
                var opts = $.extend({}, config, options);
                if(!uiDialog){
                    uiDialog = bui.dialog({
                        render: true
                    }).create({
                        title: opts.title,
                        content: `<div id="${numberId}" class="bui-number">
                            <div class="bui-number-prev"><i class="icon-minus"></i></div>
                            <input type="text" name value=${opts.value}>
                            <div class="bui-number-next"><i class="icon-plus"></i></div>
                        </div>`,
                        className: 'bui-dialog-score ' + opts.className,
                        appendTo: router.$(opts.appendTo),
                        buttons: [{
                            name: '取消', value: 'cancel'
                        }, {
                            name: '确认打分', value: 'confirm'
                        }],
                        callback: function(e){
                            var $target = $(e.target);
                            var value = $target.attr('value');
                            if(uiNumber && value == 'confirm'){
                                opts.onScore(uiNumber.value());
                            }
                        }
                    }).on('open', function(){
                        if(uiNumber){ return; }
                        uiNumber = bui.number({
                            id: `#${numberId}`,
                            min: opts.min,
                            max: opts.max,
                            step: opts.step,
                            value: opts.value,
                            render: false,
                            onChange: function(){
                                opts.onChange(this.value());
                            }
                        })
                        var value = opts.value, min = opts.min, max = opts.max;
                        uiNumber.value(value >= min && value <= max ? value : min);
                    });
                }
                uiDialog && uiDialog.open();

                return this;
            }

            that.beforeDestroy = function(){
                console.log('页面销毁了');
            }

            return that.init(config);
        }
    });

})(window.bui || {}, window.libs);
