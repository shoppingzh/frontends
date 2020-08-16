import Vue from "vue"
import VueRouter from "vue-router"
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  meta: { menu: true, title: '控制台' },
  children: [{
    path: '',
    component: () => import('@/views/dashboard/index')
  }]
}, {
  path: '/m1',
  component: Layout,
  meta: { menu: true, title: '一级菜单' },
  children: [{
    path: 'm1-1',
    component: () => import('@/views/dashboard/index'),
    meta: { menu: true, title: '二级菜单1' }
  }, {
    path: 'm1-2',
    component: () => import('@/views/dashboard/index'),
    meta: { menu: true, title: '二级菜单2' },
    children: [{
      path: 'm1-2-1',
      component: () => import('@/views/dashboard/index'),
      meta: { menu: true, title: '三级菜单1' }
    }]
  }]
}, {
  path: '/login',
  component: () => import('@/views/login/index')
}]

const router = new VueRouter({
  routes
})

export default router
