<template>
  <section class="layout layout--fixed">
    <aside class="layout__aside">
      <el-scrollbar>
        <el-menu default-active="0" collapse>
          <el-menu-item index="0"><i class="el-icon-goods" />控制台</el-menu-item>
          <el-menu-item index="1">控制台</el-menu-item>
          <el-menu-item index="2">控制台</el-menu-item>
          <el-menu-item index="3">控制台</el-menu-item>
          <el-menu-item index="4">控制台</el-menu-item>
        </el-menu>
      </el-scrollbar>
    </aside>
    <main class="layout__main">
      <navbar />
      <div class="layout__content"></div>
    </main>
  </section>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  },
  computed: {
    collapse() {
      return this.$store.state.app.collapse
    }
  },
  created() {
    console.log(this.collapse)
  }
}
</script>
