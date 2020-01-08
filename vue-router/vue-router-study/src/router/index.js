import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Profile from '../views/user/Profile.vue'
import Article from '../views/Article.vue'
import Error404 from '../views/error/404.vue'

Vue.use(VueRouter)

const menuRouters = [{
    path: '/profile/:id?',
    name: 'profile',
    component: Profile,
    props: true
}, {
    path: '/article/:id?',
    name: 'article',
    component: Article
}]

const routes = [{
    path: '/',
    name: 'login',
    component: Login
},{
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/home',
    name: 'home',
    component: Home,
    children: menuRouters
}, {
    path: '*',
    name: '404',
    component: Error404
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

// 路由全局事件
// router.beforeEach((to, from, next) => {
//     window.console.log(from)
//     next();
// })

export default router
