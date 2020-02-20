<template>
  <div type="flex" class="message-box">
    <div ref="list" span="24" class="message-box__list">
      <div v-for="message in messages" class="message" :key="message.key">
        <div class="message__username">{{ message.username || '匿名用户' }}</div>
        <div class="message__content">{{ message.text || '' }}</div>
      </div>
    </div>
    <div class="message-box__reply">
      <textarea ref="contentInput" class="message-box__reply__input" placeholder="我有话说.." 
        @keydown.enter="handleSendMessage" @input="replyContent = $refs.contentInput.value"></textarea>
      <el-button type="primary" size="mini" :disabled="!hasReplyContent"
        class="message-box__reply__send" @click="handleSendMessage">发送(Enter)</el-button>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http'
import dayjs from 'dayjs'

export default {
  name: 'MessageBox',
  props: {
    chatroomId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      messages: [],
      timer: null,
      replyContent: ''
    }
  },
  watch: {
    replyContent (newVal) {
      this.$refs.contentInput.value = newVal
    }
  },
  computed: {
    hasReplyContent () {
      return this.replyContent && this.replyContent.trim()
    }
  },
  mounted () {
    this.loadNewMessages()
    this.timer = window.setInterval(() => {
      this.loadNewMessages()
    }, 5000)
  },
  beforeDestroy () {
    window.clearInterval(this.timer)
  },
  methods: {
    loadNewMessages () {
      const params = { chatroom: this.chatroomId, pageSize: -1 }
      if (this.messages.length) {
        params.after = dayjs(this.messages[this.messages.length - 1].time).format('YYYY-MM-DD HH:mm:ss')
      }
      http({
        url: `/appLive/message_list.do`,
        method: 'get',
        withCredentials: true,
        params: params
      }).then((resp) => {
        const result = resp.data
        if (result.success) {
          const list = result.data
          if (list && list.length) {
            this.messages.push(...result.data)
            this.$nextTick(() => {
              this.scrollToBottom()
            })
          }
        }
      })
    },
    handleSendMessage () {
      const content = this.$refs.contentInput.value
      if (content && content.trim()) {
        http({
          url: '/appLive/message_reply.do',
          method: 'post',
          withCredentials: true,
          params: {
            chatroom: this.chatroomId,
            content: content
          }
        }).then((resp) => {
          const result = resp.data
          if (result.success) {
            this.replyContent = ''
            this.loadNewMessages()
          }
        })
      }
    },
    scrollToBottom () {
      this.$refs.list.scrollTop = this.$refs.list.scrollHeight
    }
  }
}
</script>

<style scoped>
  .message-box{ height: 100%; display: flex; flex-direction: column; }
  .message-box__list{ flex: 1; padding: 15px 10px; border-bottom: 1px solid rgba(0, 0, 0, .2); overflow: auto; }
  .message-box__reply{ padding: 5px; box-sizing: border-box; }
  .message-box__reply__input{ color: #ccc; font-size: 14px; border: none; outline: none; width: 100%; height: 160px; background-color: rgba(0, 0, 0, 0); resize: none; }
  .message-box__reply__send{ float: right; margin-right: 15px; margin-bottom: 5px; }
  ::-webkit-scrollbar{ width: 5px; background-color: rgba(0, 0, 0, .5); }
  ::-webkit-scrollbar-thumb{ background-color: rgba(255, 255, 255, .35); }
  /* 消息 */
  .message{ margin-bottom: 8px; }
  .message__username{ font-size: 12px; color: #409EFF; }
  .message__content{ font-size: 14px; color: #ddd; padding: 5px 0; }
</style>
