<template>
  <nav class="layout__navbar">
    <el-link
      :underline="false"
      class="layout__navbar__toggle"
      @click="handleCollapse">
      <i class="el-icon-s-fold" />
    </el-link>
  </nav>
</template>

<script>
export default {
  methods: {
    handleCollapse() {
      this.$store.dispatch('toggleCollapse')
    }
  }
}
</script>

<style>

</style>