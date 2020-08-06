<template>
  <section
    class="layout layout--fixed"
    :class="[collapse ? 'layout--collapse' : '']">
    <aside class="layout__aside">
      <el-scrollbar>
        <el-menu default-active="0">
          <el-menu-item index="0">
            <menu-item />
          </el-menu-item>
          <el-menu-item index="1">
            <menu-item />
          </el-menu-item>
          <el-menu-item index="2">
            <menu-item />
          </el-menu-item>
          <el-menu-item index="3">
            <menu-item />
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </aside>
    <main class="layout__main">
      <navbar />
      <div class="layout__content">hello</div>
    </main>
  </section>
</template>

<script>
import Navbar from './components/Navbar'
import MenuItem from './components/MenuItem'
export default {
  components: {
    Navbar,
    MenuItem
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
