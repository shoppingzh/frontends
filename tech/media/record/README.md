# 录制插件

## 使用方法

``` html
<video style="width: 400px; height: 400px;"></video>
<script>
var recorder = new Recorder(document.querySelector('video'), {
  onReady: function() {},
  onNotSupported: function() {},
  onError: function(e) {},
  screenshot: {
    fpm: 60,
    callback: function(data) {
      // URL.createObjectURL(data)
    }
  }
})
</script>
```


## options

参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
onReady | 准备就绪回调 | function | -
onNotSupported | 不支持时回调 | function | -
onError | 初始化错误时回调 | function | -
screenshot | 截图 | object | -
screenshot.fpm | 每分钟截图数 | number | -
screenshot.callback | 每一帧截图的回调 | function | -

## methods

方法 | 说明 | 参数 | 返回值
-- | -- | -- | --
start | 开始录制 | - | -
stop | 停止录制 | - | -

## 其它

`Recorder.checkSupport()` 检查是否支持录制