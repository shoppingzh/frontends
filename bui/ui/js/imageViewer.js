/**
 * 图片查看器
 */
;(function(ui, $){

    ui.extend({
        name: 'imageViewer',
        config: {
        },
        callback: function(opt){
            let that = this;
            let param = this.config;
            var rotateDegree = 0;

            that.init = function(option){
                param = $.extend(true, {}, param, option);
                var uiDialog = ui.dialog({
                    render: true
                }).create({
                    title: null,
                    buttons: null,
                    fullscreen: true,
                    className: 'bui-dialog-imageViewer ',
                    content: `
                        <div class="bui-box-align-middle imageViewer-wrapper">
                            <img src="${param.src}">
                        </div>
                        <div class="imageViewer-actions bui-box-align-center">
                            <div class="bui-btn" name="rotate"><i class="icon-alert"></i> 旋转</div>
                            <div class="bui-btn" name="download"><i class="icon-ecode"></i> 下载到本地</div>
                        </div>
                        <div class="bui-dialog-close container-xy"><i class="icon-close c-aaa"></i></div>
                    `,
                }).open();

                var $uiDialog = uiDialog.selector();
                var $imgWrap = $uiDialog.find('.imageViewer-wrapper');
                var $img = $imgWrap.find('img');
                // 缩放操作(使用pinchzoom插件，如果当前环境没有，那就不使用)
                if(typeof PinchZoom !== 'undefined'){
                    new PinchZoom.default($imgWrap[0], {});
                }
                // 旋转图片
                var $actions = $uiDialog.find('.imageViewer-actions');
                $actions.find('[name="rotate"]').on('click', function(){
                    nextRotateDegree();
                    $img.css({
                        transform: `rotate(${rotateDegree}deg)`
                    });
                })
                // 下载图片到本地
                $actions.find('[name="download"]').on('click', function(){

                });
            }

            function nextRotateDegree(){
                rotateDegree += 90;
                if(Math.abs(rotateDegree) >= 360){
                    rotateDegree = 0;
                }
            }

            return this.init();
        }
    });

})(window.bui, window.libs);