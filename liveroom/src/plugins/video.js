import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import language from 'video.js/dist/lang/zh-CN.json'
import 'videojs-flash'

videojs.addLanguage('zh-CN', language)

export default videojs