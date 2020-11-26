(function() {

  function noop() {}

  var defaults = {
    onInit: noop,
    onError: noop,
    onNotSupported: noop
  }

  function Recorder(video, options) {
    this.video = video
    this.options = Object.assign({}, defaults, options)
    this.init()
  }

  Recorder.prototype = {
    init: function() {
      this.mediaDevices = navigator.mediaDevices
      this.size = {
        width: this.video.width,
        height: this.video.height
      }
    },
    start: function() {
      this.mediaDevices.getUserMedia({
        video: {
          width: this.size.width,
          height: this.size.height,
          facingMode: "user"
        },
        audio: false
      }).then((stream) => {
        this.video.srcObject = stream
        this.video.onloadeddata = this.onReady.bind(this)
      }).catch(e => {
        this.options.onError.call(this, e)
      })
    },
    onReady: function() {
      this.video.play()
      if (this.options.screenshot) {
        setInterval(() => {
          this.takeScreenshot()
        }, 60 / this.options.screenshot.fpm * 1000)
      }
    },
    takeScreenshot: function() {
      canvas = document.createElement('canvas')
      canvas.width = this.size.width
      canvas.height = this.size.height
      var ctx = canvas.getContext('2d')
      ctx.drawImage(this.video, 0, 0, this.size.width, this.size.height)
      canvas.toBlob((blob, type) => {
        var callback = this.options.screenshot.callback
        if (callback) {
          callback.call(this, blob)
        }
      })
    }
  }

  window.Recorder = Recorder

})();