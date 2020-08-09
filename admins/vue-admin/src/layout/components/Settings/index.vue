<template>
  <div class="settings">
    <el-form size="small" label-position="top">
      <el-form-item label="主题">
        <el-select v-model="theme">
          <el-option label="默认" value="default" />
          <el-option label="深色主题" value="dark" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  computed: {
    theme: {
      get() {
        return this.$store.state.app.theme
      },
      set(newVal) {
        this.$store.dispatch('app/setTheme', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .settings {
    padding: 20px;
  }
</style>