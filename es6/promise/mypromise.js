(function() {


    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';    
    const REJECTED = 'rejected';

    function MyPromise(execution) {
        this.status = PENDING;
        this.onFulfilledQueue = [];
        this.onRejectedQueue = [];
        var that = this;
        try {
            execution(resolve, reject);
        } catch (err) {
            reject(err);
        }
        
        function resolve(value) {
            that.status = FULFILLED;
            that.value = value
            var callback;
            while(callback = that.onFulfilledQueue.shift()) {
                callback(value);
            }
        }

        function reject(reason) {
            that.status = REJECTED;
            that.reason = reason;
            var callback;
            while(callback = that.onRejectedQueue.shift()) {
                callback(reason);
            }
        }

    }

    MyPromise.prototype.then = function(onFulfilled, onRejected) {
        if (this.status == PENDING) {
            this.onFulfilledQueue.push(onFulfilled);
            this.onRejectedQueue.push(onRejected);
        } else if (this.status == FULFILLED){
        }
    }

    window.MyPromise = MyPromise;

})();