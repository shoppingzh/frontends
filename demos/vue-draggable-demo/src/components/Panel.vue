<template>
  <div class="panel" :style="{ width: width }">
      <div class="panel-head">{{ title }}</div>
      <div class="panel-body" :style="{ height: height + 'px' }">
          <slot name="body"></slot>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        width: {
            type: String,
            required: false
        },
        height: {
            type: Number,
            required: false
        },
        title: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
    .panel{ border: 1px solid #eee; box-sizing: border-box; margin-bottom: 15px; }
    .panel .panel-head{ min-height: 30px; background-color: rgb(249, 252, 254); border-bottom: 1px solid rgb(189, 206, 224); display: flex; align-items: center; padding: 0 5px; font-size: 14px; color: #666; }
    .panel .panel-body{ padding: 20px 5px; }
</style>