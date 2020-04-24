/**
 * 实现思路：
 * 节流一般出现在需要控制任务执行节奏的场景，例如某个操作在1秒内最多只能被执行一次，其余的任务都会被
 * 告知失败，直到下一个1秒的来临。
 * 维护一个是否空闲的状态，初始值为true。如果外部发生了访问，则根据当前忙碌状态决定是否要执行
 * 任务，如果当前空闲，马上执行任务并标记状态为忙碌，同时开启倒计时，倒计时结束后重新转为空闲状态。
 * 在倒计时的这段时间里，状态始终为忙碌，此时不管来了多少任务都拒绝，直到倒计时结束后重新转为空闲状态。
 */
;(function() {

    function Throttle(options) {
        this.free = true;
        var opts = Object.assign({}, Throttle.defaults, options);
        this.factor = opts.factor;
    }

    Throttle.prototype = {
        touch: function(callback, failure) {
            var that = this;
            that._done(that.free ? callback : failure);
            if (that.free) {
                // 标记忙碌并开启倒计时，倒计时结束后清除忙碌状态
                that.free = false;
                setTimeout(function() {
                    that.free = true;
                }, that.factor)
            }
            
        },
        _done: function(callback) {
            if (typeof callback === 'function') {
                callback.call(this);
            }
        }
    }

    Throttle.defaults = {
        factor: 300
    }

    window.Throttle = Throttle;

})();