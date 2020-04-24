/**
 * 实现思路：
 * 防抖动一般用于实时搜索这样的场景里，当N个操作任务同时在很短的时间内被通知执行时，最终只会产生一次执行效果。
 * 当任务被通知执行时，开启一个倒计时，倒计时结束后执行任务，如果在该任务的等待时间内又来了一个新的任务，则马上
 * 清除上一个任务的倒计时并重新开始新的倒计时，直到最后的任务没有被后面的任务冲断时，任务被执行。
 */
(function() {

    function Debounce(options) {
        this.timer = null;
        var opts = Object.assign({}, Debounce.defaults, options);
        this.factor = opts.factor;
    }

    Debounce.prototype = {
        touch: function(callback) {
            var that = this;
            clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                callback.call(that);
            }, this.factor)
        }
    }

    Debounce.defaults = {
        factor: 500
    }

    window.Debounce = Debounce;
})();