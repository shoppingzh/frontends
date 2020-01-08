;(function($, window){

    $.star = function(options){
        var opts = $.extend({}, defaults, options);
        // create and load
        var $star = createStar(opts);
        
        // close later
        if(opts.delay){
            var timer = setTimeout(() => {
                clearTimeout(timer);
                $star.remove();
                opts.onClose();
            }, Math.abs(opts.delay));
        }
    }

    $.fn.star = function(options){
        options = options || {};
        return this.each(function(){
            options.appendTo = this;
            $.star(options);
        });
    }

    function createStar(opts){
        var $star = $(opts.template ? opts.template() : '<i></i>');
        if(!opts.template){
            $star.addClass(opts.icon).addClass(opts.className);
        }
        $star.appendTo($(opts.appendTo));
        // 重新调整位置：使其位于中心位置
        var pos = opts.position,
            x = pos[0] || 0,
            y = pos[1] || 0,
            wid = $star.width(),
            hei = $star.height();
        $star.css({
            position: 'absolute',
            zIndex: opts.zIndex,
            left: (x - wid/2) + 'px',
            top: (y - hei/2) + 'px',
            right: 'auto',
            bottom: 'auto'
        });
        return $star;
    }

    var defaults = {
        icon: '',                  // 图标
        className: '',             // 自定义类名
        delay: 0,                  // 滞留时长
        position: [0, 0],          // 位置(此位置表示弹出内容的中心点，而不是左上方的那个点)
        zIndex: 88,                // z轴
        appendTo: 'body',          // 容器
        template: null,            // 可自定义模板
        onClose: function(){}      // 关闭后的回调
    };

})(jQuery, window);