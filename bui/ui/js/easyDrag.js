/**
 * @name Easy Drag
 * @version v1.0
 * @description 为元素添加.easy-drag类名就可以拖动了，快试试吧！
 * 注：任何元素皆可拖动，但是定位为static的元素无法定位到拖动结束的位置，因为确定元素的位置使用了定位的基本属性(top/left)，因此
 * 如果要让元素拖动后停留在拖动结束的位置，请将元素的position属性设置为relative/absolute/fixed
 * @author xpzheng
 * @date 2019-07-12
 */
(function(){

    var doc = window.document;

    touch.on(doc, 'dragstart', '.easy-drag', function(e){
        e.preventDefault();
    })

    touch.on(doc, 'drag', '.easy-drag', function(e){
        var x = e.x, y = e.y; // x、y轴的偏移量
        var $this = $(e.target),
            $e = $this.hasClass('easy-drag') ? $this : $this.parents('.easy-drag');
        $e.css({
            transform: `translate3d(${x}px, ${y}px, 0)`,
            webkitTransform: `translate3d(${x}px, ${y}px, 0)`
        });
    })

    touch.on(doc, 'dragend', '.easy-drag', function(e){
        var $this = $(e.target),
            $e = $this.hasClass('easy-drag') ? $this : $this.parents('.easy-drag');
        var position = $e.position(),
            left = position.left,
            top = position.top;
        $e.css({
            left: `${left}px`,
            top: `${top}px`,
            right: `auto`,
            bottom: `auto`,
            transform: 'none'
        });
    })

})(window);