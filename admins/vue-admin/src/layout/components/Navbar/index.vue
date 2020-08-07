<template>
  <nav class="layout__navbar">
    <el-link
      :underline="false"
      class="layout__navbar__toggle"
      @click="handleCollapse">
      <i
        class="el-icon-s-fold"
        :style="{ transform: `rotate(${collapse ? '180' : '0'}deg)` }"
        style="transition: transform .3s;" />
    </el-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      collapse: 'app/collapse'
    })
  },
  methods: {
    handleCollapse() {
      this.$store.dispatch('app/toggleCollapse')
    }
  }
}
</script>

<style>

</style>