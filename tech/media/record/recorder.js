window.Recorder = (function() {

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

  // 检查是否支持录制
  Recorder.checkSupport = function() {
    try {
      if (!navigator.mediaDevices.getUserMedia) {
        return false
      }
      return true
    } catch (error) {
      return false
    }
  }

  Recorder.prototype = {
    init: function() {
      if (!Recorder.checkSupport()) {
        return this.options.onNotSupported()
      }
      this.mediaDevices = navigator.mediaDevices
      this.size = {
        width: this.video.width || this.video.clientWidth,
        height: this.video.height || this.video.clientHeight
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
        this.stream = stream
        this.video.srcObject = stream
        this.video.onloadeddata = this.onReady.bind(this)
      }).catch(e => {
        this.options.onError.call(this, e)
      })
    },
    stop: function() {
      this.recording = false
      if (this.stream) {
        var tracks = this.stream.getTracks() || []
        tracks.forEach(track => {
          track.stop()
        })
      }
    },
    onReady: function() {
      this.video.play()
      this.recording = true
      if (this.options.screenshot) {
        this.takeScreenshotContinuous(60 / this.options.screenshot.fpm * 1000)
      }
    },
    takeScreenshotContinuous: function(delay) {
      var doTake = () => {
        this.takeScreenshot(() => {
          if (!this.recording) return
          setTimeout(doTake, delay)
        })
      }
      doTake()
    },
    takeScreenshot: function(cb) {
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
        cb && cb()
      })
    }
  }

  return Recorder;

})();