(function() {

  function DrawingBoard(canvas, options) {
    if (typeof canvas === 'string') {
      canvas = document.querySelector(canvas)
    }
    if (!canvas) {
      throw new Error('canvas为空')
    }
    this.canvas = canvas
    this.options = options
    this._init()
  }
  

  DrawingBoard.prototype = {
    _init: function() {
      this.ctx = this.canvas.getContext('2d')
      this.canvas.width = this.canvas.clientWidth
      this.canvas.height = this.canvas.clientHeight
      this.bounds = {
        x: this.canvas.offsetLeft,
        y: this.canvas.offsetTop,
        width: this.canvas.width,
        height: this.canvas.height
      }
      
      this.canvas.style.boxSizing = 'border-box'

      var ctx = this.ctx
      var _this = this
      this.canvas.addEventListener('touchstart', function(e) {
        e.preventDefault()
        ctx.beginPath()
        var coord = _this._getTouchCoord(e)
        ctx.moveTo(coord.x, coord.y)
        _this._drawPath(coord.x, coord.y)
      }, false)
      this.canvas.addEventListener('touchmove', _.throttle(function(e) {
        var coord = _this._getTouchCoord(e)
        _this._drawPath(coord.x, coord.y)
      }, 10), false)
    
      this.canvas.addEventListener('touchend', function(e) {
      })
    },
    _getTouchCoord: function(e) {
      var touch = e.touches[0]
      if (!touch) {
        return { x: 0, y: 0 }
      }
      return {
        x: touch.clientX - this.bounds.x + document.body.scrollLeft,
        y: touch.clientY - this.bounds.y + document.body.scrollTop
      }
    },
    _drawPath: function(x, y) {
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
    },
    clear: function() {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, this.bounds.width, this.bounds.height)
    }
  }

  window.DrawingBoard = DrawingBoard;

})();