/**
 * @name app-tips
 * @version v1.0
 * @author xpzheng
 * @date 2019-08-08
 * 温馨提示插件。提供两种提示方式：
 * 1. 普通提示
 * 普通提示使用BUI的hint组件实现，当直接使用如$.tips('提示信息')的方法进行提示时即为普通提示，该提示从main元素的下方弹出，
 * 在一定时间后消失，也可以通过点击关闭按钮手动关闭。
 * 普通提示需要注意的事项：
 *   a. 由于hint绝对定位于main元素内，因此在使用时要确保main元素的内容不会超过其计算后的高度，也就是说，main元素内不能存在滚
 *      动的内容，如果main内可滚动将导致提示内容看不到。如果确实需要滚动，请在main内定义一个高度为100%的div，让该div在纵向滚
 *      动即可；
 *   b. 当插件传入always参数为true时，无论进入页面多少次，总是会提示；
 *   c. 如果always参数不为true，提示自动消失后不会记录，下次进入页面仍会提示；如果用户手动关闭了提示，提示消失后会记录，下次进
 *      入页面时不会再提示(设计思想：用户不点击关闭则认为其没有看到，下次仍然会提示，以防止其错过提示信息；用户点击关闭则认为其
 *      已经清楚了提示信息，下次进入时不会再打扰Ta)。
 * 2. 定制化提示
 * 定制化提示使用BUI的dialog组件实现，使用时可以传入自定义的提示模板(template参数)进行定制化的提示，该提示为全屏提示，点击屏幕
 * 的任意位置可关闭提示，此提示方式灵活度高，可以适应各种提示场景。
 * 定制化提示需要注意的事项：
 *   a. dialog的class默认为tips-dialog，使用者可在提示的页面对该对话框进行设计；
 *   b. 与普通提示一样，当always参数为true时，无论进入页面多少次都会提示(由于dialog提示会打扰用户操作，因此不推荐这么使用)；
 *   c. dialog关闭后会记录已提示，如果always参数为false，在下次进入页面后不会再提示。
 */
;(function($, bui, window){

    var uiStorage = bui.storage(1000);

    $.fn.tips = function(msg, options){
        options = options || {};
        return this.each(function(){
            options.appendTo = $(this);
            tips(msg, options);
        });
    }

    function tips(msg, options){
        var opts = $.extend({}, defaults, options);
        if(opts.always || !hasRecordedTips(msg)){
            if(opts.template){
                tipsCustomer(msg, opts);
            }else{
                tipsHint(msg, opts);
            }
        }
    }

    // 使用hint组件提示
    function tipsHint(msg, opts){
        var closeId = bui.guid();
        var uiTips = bui.hint({
            content: `
                <div class="bui-box">
                    <div class="span1">${msg || '提示信息'}</div>
                    <i id="${closeId}" class="icon-error"></i>
                </div>
            `,
            skin: 'primary',
            timeout: opts.timeout,
            autoClose: opts.timeout > 0,
            position: 'bottom',
            appendTo: opts.appendTo
        });
        $(`#${closeId}`).on('click', function(){
            if(uiTips){
                uiTips.remove();
            }
            recordTips(msg);
        });
    }

    function tipsCustomer(msg, opts){
        var uiDialog = bui.dialog({
            render: true,
            title: ' ',
            content: opts.template() || '',
        }).create({
            effect: 'showIn',
            className: 'tips-dialog',
            fullscreen: true,
            appendTo: opts.appendTo,
            buttons: 'none',
        });
        uiDialog.selector().on('click', function(){
            uiDialog.close();
        });
        uiDialog.on('close', function(){
            uiDialog.destroy();
            recordTips(msg);
        });
        uiDialog.open();
    }

    // 检查某提示是否已记录
    function hasRecordedTips(msg){
        var tipsArr = uiStorage.get('appTips');
        if(tipsArr && tipsArr.length){
            return uiStorage.get('appTips', msg, 'id');
        }
        return false;
    }

    // 记录某提示
    function recordTips(msg){
        uiStorage.set('appTips', {'id':  msg, 'timestamp': new Date().getTime()}, 'id');
    }

    var defaults = {
        timeout: 7000,
        always: false,
        template: null,
        appendTo: 'body'
    }

})(jQuery || Zepto, bui, window);
