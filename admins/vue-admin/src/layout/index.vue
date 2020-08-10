<template>
  <div>
    <component :is="currentLayout" />
  </div>
</template>

<script>
import './layouts'
export default {
  computed: {
    currentLayout: {
      get() {
        return this.$store.state.app.layout || 'LayoutDefault'
      },
      set(newVal) {
        this.$store.dispatch('app/setLayout', newVal)
      }
    }
  }
}
</script>

<style>

</style>