<template>
  <nav class="layout__navbar">
    <el-link
      :underline="false"
      class="layout__navbar__toggle"
      @click="handleToggleCollapse">
      <i
        class="el-icon-s-fold"
        :style="{ transform: `rotate(${collapse ? '180' : '0'}deg)` }"
        style="transition: transform .3s;" />
    </el-link>
    <div class="layout__navbar__menu">
      <div class="layout__navbar__menu-item" @click="handleToggleSetting">
        <i class="el-icon-s-tools" />
      </div>
    </div>
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
    handleToggleCollapse() {
      this.$store.dispatch('app/toggleCollapse')
    },
    handleToggleSetting() {
      this.$emit('setting')
    }
  }
}
</script>

<style>

</style>