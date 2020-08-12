<template>
  <span>
    <i class="el-icon-location" />
    <span slot="title">{{ title }}</span>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    route: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      collapse: 'app/collapse'
    }),
    title() {
      return this.route.meta ? this.route.meta.title : ''
    }
  }
}
</script>

<style>

</style>
