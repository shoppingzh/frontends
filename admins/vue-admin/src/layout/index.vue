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
import { mapGetters } from 'vuex'
export default {
  components: {
    Navbar,
    MenuItem
  },
  computed: {
    ...mapGetters({
      collapse: 'app/collapse'
    })
  },
  mounted() {
    this.resizeHandler = this._.debounce(() => {
      const needCollapse = document.body.clientWidth < 768
      if (needCollapse && !this.collapse) {
        this.$store.dispatch('app/toggleCollapse')
      }
    }, 150)
    window.addEventListener('resize', this.resizeHandler , false)
  },
  beforeDestroy() {
    window.removeEventListener(this.resizeHandler)
  }
}
</script>
