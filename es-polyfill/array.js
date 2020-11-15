(function() {

  // some
  Array.prototype.some2 = function(predicate) {

    for (var i = 0, len = this.length; i < len; i++) {
      var result = predicate.call(this, this[i], i, this)
      if (result) {
        return true
      }
    }

    return false
  }

  // every
  Array.prototype.every2 = function(predicate) {

    for (var i = 0, len = this.length; i < len; i++) {
      var result = predicate.call(this, this[i], i, this)
      if (!result) {
        return false
      }
    }
    
    return true
  }

  // map
  Array.prototype.map2 = function(callback) {
    var arr = []
    for (var i = 0, len = this.length; i < len; i++) {
      arr.push(callback.call(this, this[i], i, this))
    }
    return arr
  }

  // filter
  Array.prototype.filter2 = function(callback) {
    var arr = []
    for (var i = 0, len = this.length; i < len; i++) {
      var value = this[i]
      var result = callback.call(this, value, i, this)
      if (result) {
        arr.push(value)
      }
    }
    return arr
  }

  // find
  Array.prototype.find2 = function(callback) {
    for (var i = 0, len = this.length; i < len; i++) {
      var value = this[i]
      var result = callback.call(this, value, i, this)
      if (result) {
        return value
      }
    }
  }

  // reduce
  Array.prototype.reduce2 = function(callback, initialValue) {
    var accumulator = initialValue
    for (var i = 0, len = this.length; i < len; i++) {
      var value = this[i]
      accumulator = callback.call(this, accumulator, value, i, this)
    }
    return accumulator
  }

})()