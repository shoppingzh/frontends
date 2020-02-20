<template>
  <div class="home">
    <div class="video-wrapper">
      <video ref="player" class="video-js">
        <!-- <source src="rtmp://localhost/oflaDemo/100" type="rtmp/flv" /> -->
        <!-- <source src="rtmp://58.200.131.2:1935/livetv/hunantv" type="rtmp/flv" />> -->
      </video>
    </div>
    <div class="chat-wrapper">
      <message-box v-if="chatroomId !== null" :chatroomId="chatroomId" />
    </div>
  </div>
</template>

<script>
import videojs from '@/plugins/video'
import MessageBox from '@/components/MessageBox'

export default {
  name: 'Home',
  components: {
    MessageBox
  },
  data () {
    return {
      player: null,
      url: null,
      chatroomId: null
    }
  },
  watch: {
    url (newVal) {
      this.renderPlayer(newVal)
    }
  },
  mounted () {
    this.initPlayer()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.chatroomId = to.query.chatroomId
      const url = to.query.url
      if (url) {
        vm.url = url
      }
    })
  },
  methods: {
    initPlayer () {
      this.player = videojs(this.$refs.player, {
        controls: true,
        autoplay: true,
        language: 'zh-CN',
        techOrder: ['flash', 'html5'],
        liveui: true,
        controlBar: {
          pictureInPictureToggle: false,
          volumePanel: {
            inline: false
          }
        },
      })
    },
    renderPlayer (url) {
      this.player.src({
        src: url, // `rtmp://localhost/oflaDemo/${roomId}`,
        type: 'rtmp/flv'
      })
    }
  }
}
</script>

<style scoped>
  .home{ height: 100%; }
  .video-wrapper{ position: absolute; left: 0; right: 300px; top: 0; bottom: 0; overflow: auto; }
  .chat-wrapper{ position: absolute; right: 0; width: 300px; top: 0; bottom: 0; overflow: auto; background-color: rgba(0, 0, 0, .8); }
  .video-js{ width: 100%; height: 100%; }
</style>
