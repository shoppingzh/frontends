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