<template>
  <router-link v-if="leaf" :to="routePath" tag="div">
    <el-menu-item
      :index="routePath">
      <i class="el-icon-document" />
      <span slot="title">导航三</span>
    </el-menu-item>
  </router-link>
  <el-submenu v-else :index="routePath">
    <template #title>
      <i class="el-icon-document" />
      <span slot="title">导航三</span>
    </template>
    <route-menu
      v-for="childRoute in route.children"
      :key="childRoute.path"
      :route="childRoute"
      :parent-path="routePath" />
  </el-submenu>
</template>

<script>
const { join } = require('path')
export default {
  name: 'RouteMenu',
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
