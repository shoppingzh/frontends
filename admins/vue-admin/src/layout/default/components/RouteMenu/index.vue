<template>
  <el-menu-item
    v-if="leaf"
    :index="route.path">
    <router-link :to="routePath" tag="div">
      <route-menu-item :route="route" />
    </router-link>
  </el-menu-item>
  <el-submenu v-else :index="route.path">
    <template #title>
      <route-menu-item :route="route" />
    </template>
    <route-menu
      v-for="childRoute in route.children"
      :key="childRoute.path"
      :route="childRoute"
      :parent-path="routePath" />
  </el-submenu>
</template>

<script>
import RouteMenuItem from './RouteMenuItem'
const { join } = require('path')
export default {
  name: 'RouteMenu',
  components: {
    RouteMenuItem
  },
  props: {
    route: {
      type: Object,
      required: true
    },
    parentPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    leaf() {
      return !this.route.children || !this.route.children.length
    },
    routePath() {
      return join(this.parentPath, this.route.path)
    }
  }
}
</script>

<style>

</style>
