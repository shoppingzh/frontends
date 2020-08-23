(function() {

  function Query(el) {
    if (typeof el === 'string') {
      el = document.querySelectorAll(el)
    }
    this.els = el.length > 1 ? el : [el]
    return
  }

  // Class

  Query.prototype.addClass = function(cls) {
    this.each(function() {
      this.classList.add(cls)
    })
    return this
  }

  Query.prototype.removeClass = function(cls) {
    this.each(function() {
      this.classList.remove(cls)
    })
    return this
  }

  Query.prototype.hasClass = function(cls) {
    this.each(function() {
      this.classList.contains(cls)
    })
  }

  Query.prototype.toggleClass = function(cls) {
    this.each(function() {
      var $el = Query(this)
      $el.hasClass(cls) ? $el.removeClass(cls) : $el.addClass(cls)
    })
    return this
  }

  // Iterate

  Query.prototype.each = function(callback) {
    this.els.forEach(function(el, index) {
      callback.call(el, index)
    })
    return this
  }

  // Events

  Query.prototype.on = function(type, listener) {
    this.each(function() {
      this.addEventListener(type, listener, false)
    })
    return this
  }

  Query.prototype.off = function(type, listener) {
    this.each(function() {
      this.removeEventListener(type, listener)
    })
    return this
  }

  Query.prototype.one = function(type, listener) {
    this.each(function() {
      function handler() {
        listener.call(this, Array.prototype.splice.call(arguments, 0))
        this.removeEventListener(type, handler)
      }
      this.addEventListener(type, handler)
    })
  }

  window.$ = Query

})();