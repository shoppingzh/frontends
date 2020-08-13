<template>
  <section
    class="layout layout--fixed"
    :class="[collapse ? 'layout--collapse' : '']"
    :data-theme="theme">
    <aside class="layout__aside">
      <div class="layout__logo">
        <span class="layout__logo__icon">
          <img src="favicon.ico">
        </span>
        <span v-show="!collapse" class="layout__logo__title">vue-admin</span>
      </div>
      <el-scrollbar class="layout__aside__menu">
        <el-menu :default-active="$route.path" unique-opened :collapse="collapse">
          <route-menu
            v-for="route in menuRoutes"
            :key="route.path"
            :route="route" />
        </el-menu>
      </el-scrollbar>
    </aside>
    <main class="layout__main">
      <navbar
        @setting="setting = !setting" />
      <section class="layout__content">
        <router-view />
      </section>
    </main>
    <el-drawer
      title="设置"
      size="500px"
      :visible.sync="setting">
      <settings />
    </el-drawer>
  </section>
</template>

<script>
import Navbar from './components/Navbar'
import Settings from '../components/Settings'
import RouteMenu from './components/RouteMenu'
import { mapGetters } from 'vuex'
import menu from '../mixins/menu'
export default {
  name: 'LayoutDefault',
  components: {
    Navbar,
    RouteMenu,
    Settings
  },
  mixins: [menu],
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
