(function(ui, $){

    ui.extend({
        name: 'tips',
        config: {
            appendTo: ui.$('.bui-page')
        },
        callback: function(opt){
            var that = this;
            var param = this.config;
            var uiStorage = ui.storage(1000);

            that.init = function(option){
                param = $.extend(true, {}, param, option);
                if(existRecord(param.id)){ return that; }
                if(param.msg){
                    tipsHint(param);
                }
                if(param.template){
                    tipsCustomer(param);
                }
                return that;
            }

            /**
             * 使用bui.hint提示
             * @param {Object} opts 
             */
            function tipsHint(opts){
                var id = ui.guid();
                var uiTips = bui.hint({
                    content: `
                        <div id="${id}" style="width: 100%;">
                            <b>${opts.msg || '提示信息'}</b>
                            <i class="icon-error" style="position: absolute; right: .1rem; top: 50%; margin-top: -.2rem;"></i>
                        </div>
                    `,
                    skin: 'primary',
                    timeout: opts.timeout,
                    autoClose: opts.timeout > 0,
                    position: 'bottom',
                    appendTo: opts.appendTo
                });
                $(`#${id}`).on('click', function(){
                    uiTips && uiTips.remove();
                    record(opts.id, opts.msg);
                });
            }

            /**
             * 使用bui.dialog自定义提示
             * @param {Object} opts 
             */
            function tipsCustomer(opts){
                var template = opts.template;
                // 所有帧
                var frames = $.isFunction(template) ? [template] : template;
                if(!frames.length){
                    return;
                }
                var uiDialog = bui.dialog({
                    render: true,
                }).create({
                    title: null,
                    content: frames.shift()() || '',
                    buttons: null,
                    effect: 'showIn',
                    className: 'tips-dialog',
                    fullscreen: true,
                    appendTo: opts.appendTo,
                });
                uiDialog.selector().css({
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: '#fff'
                }).on('click', function(){
                    var $dialog = $(this);
                    var frame = frames.shift();
                    if(frame){
                        $dialog.find('.bui-dialog-main').html(frame() || '');
                    }else{
                        uiDialog.close();
                    }
                });
                uiDialog.on('close', function(){
                    uiDialog.destroy();
                    record(opts.id, opts.msg);
                });
                uiDialog.open();
            }

            /**
             * 是否存在该提示
             * @param {String} id 
             */
            function existRecord(id){
                return isValidID(id) && uiStorage.get('appTips', id, 'id');
            }

            /**
             * 记录提示信息
             * @param {String} id 
             * @param {String} msg 提示内容
             */
            function record(id, msg){
                if(!isValidID(id)){ return; }
                uiStorage.set('appTips', {
                    id: id,
                    msg: msg,
                    timestamp: new Date().getTime()
                }, 'id');
                if(param.onRecord){
                    param.onRecord.apply(that);
                }
            }

            // 检测传入的id是否合理
            function isValidID(id){
                return id && typeof id === 'string' && id.trim();
            }

            return this.init(opt);
        }
    });

})(bui, window.libs);