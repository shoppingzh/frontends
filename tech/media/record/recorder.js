(function() {


  function Recorder(video, options) {

    this.video = video
    this.options = Object.assign({}, options)
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
    start: function(callback) {
      this.mediaDevices.getUserMedia({
        video: this.size,
        audio: true
      }).then((stream) => {
        this.video.srcObject = stream
        this.video.onloadeddata = this.onReady.bind(this)
      }).catch(e => {
        
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
          callback(blob)
        }
      })
    }
  }

  window.Recorder = Recorder

})();