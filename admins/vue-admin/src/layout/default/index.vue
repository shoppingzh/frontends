<template>
  <section
    class="layout layout--fixed"
    :class="[collapse ? 'layout--collapse' : '']"
    :data-theme="theme">
    <aside class="layout__aside">
      <el-scrollbar style="height: 100%;">
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
      <router-view />
    </main>
    <el-drawer
      title="设置"
      :visible.sync="setting">
      <settings />
    </el-drawer>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
import MenuItem from '../components/MenuItem'
import Settings from '../components/Settings'
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutDefault',
  components: {
    Navbar,
    MenuItem,
    Settings
  },
  data() {
    return {
      setting: false
    }
  },
  computed: {
    ...mapGetters({
      collapse: 'app/collapse',
      theme: 'app/theme'
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
