loader.define(function(require,exports,module){

    var pageview = {};

    // touch.on(router.$(".bui-page"), 'drag', '.floating-btn', function(e){
    //     var x = e.x, y = e.y; // x、y轴的偏移量
    //     var $this = $(e.target),
    //         $btn = $this.hasClass('floating-btn') ? $this : $this.parents('.floating-btn');
    //     $btn.css({
    //         transform: `translate3d(${x}px, ${y}px, 0)`
    //     });
    // })

    // touch.on(router.$(".bui-page"), 'dragstart', '.floating-btn', function(e){
    //     e.preventDefault();
    // })

    // touch.on(router.$(".bui-page"), 'dragend', '.floating-btn', function(e){
    //     var $this = $(e.target),
    //         $btn = $this.hasClass('floating-btn') ? $this : $this.parents('.floating-btn');
    //     var position = $btn.position(),
    //         left = position.left,
    //         top = position.top;
    //     $btn.css({
    //         left: `${left > 0 ? left : 0}px`,
    //         top: `${top > 0 ? top: 0}px`,
    //         right: `auto`,
    //         bottom: `auto`,
    //         transform: 'none'
    //     });
    // })

    // new Hammer(document.querySelector('.easy-drag')).on('pan',  function(e){
    //     console.log(e)
    // });

    return pageview;
})