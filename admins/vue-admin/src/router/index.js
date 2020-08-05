import Vue from "vue"
import VueRouter from "vue-router"
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout
}]

const router = new VueRouter({
  routes
})

export default router
