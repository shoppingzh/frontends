/**
 * 成功
 * @param {String} msg
 * @param {Function} callback
 */
function centersucc(msg, callback){
    return centermsg(msg, {
        type: 'success'
    }, callback);
}

/**
 * 警告
 * @param {String} msg 
 * @param {Function} callback
 */
function centerwarn(msg, callback){
    return centermsg(msg, {
        type: 'warning'
    }, callback);
}

/**
 * 错误/失败
 * @param {String} msg 
 * @param {Function} callback
 */
function centererr(msg, callback){
    return centermsg(msg, {
        type: 'error'
    }, callback);
}

/**
 * 中间消息
 * @param {String} msg 
 * @param {Object} options 
 * @param {Function} callback
 */
function centermsg(msg, options, callback){
    var opts = options || {},
        type = (opts.type || '').trim(),
        icon;
    if(type == 'success'){
        icon = 'icon-check';
    }else if(type == 'warning'){
        icon = 'icon-info';
    }else if(type == 'error'){
        icon = 'icon-close';
    }
    msg = msg || '';
    var content = icon ? `<div class="bui-box-vertical bui-align-center"><i class="${icon}"></i> ${msg }</div>` : `${msg}`;
    uiHint = bui.hint({
        content: content,
        effect: 'zoomIn',
        autoClose: true,
        skin: opts.skin || '',
        position: 'center',
        onClose: function(){
            if(callback){
                callback();
            }
        }
    });
    return uiHint;
}

/**
 * 点赞/收藏
 * @param {Object} options 配置
 */
function uiStar(options){
    var opts = options || {},
        icon = opts.icon || 'icons-starfill',
        position = opts.position || {},
        x = position.x ? (position.x - 30) : 0,
        y = position.y ? (position.y - 30) : 0,
        delay = opts.delay || 800,
        appendTo = opts.appendTo || '.bui-page';
    var $star = $(`<i class="${icon} star"></i>`);
    $star.css({
        left: `${x}px`,
        top: `${y}px`,
        right: 'auto',
        bottom: 'auto'
    });
    $star.appendTo(router.$(appendTo));
    var timer = setTimeout(() => {
        clearTimeout(timer);
        $star.remove();
    }, delay);
}


