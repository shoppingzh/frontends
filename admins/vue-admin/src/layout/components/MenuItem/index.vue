<template>
  <span>
    <i class="el-icon-location" />
    <span v-if="!collapse">控制台</span>
  </span>
</template>

<script>
export default {
  computed: {
    collapse() {
      return this.$store.state.app.collapse
    }
  }
}
</script>

<style>

</style>
