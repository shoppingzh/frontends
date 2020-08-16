import router from '@/router'
import NProgress from '@/plugins/nprogress'
import store from '@/store'
import whitelist from './whitelist'

NProgress.configure({
  showSpinner: true
})

router.beforeEach((to, from, next) => {

  if (whitelist.indexOf(to.path) >= 0) {
    return next()
  }

  const toLogin = to.path === '/login'
  const token = store.state.user.token
  if (!token) {
    return toLogin ? next() : next('/login')
  }

  if (toLogin) {
    return next('/')
  }

  NProgress.start()
  next()

})

router.afterEach(() => {
  NProgress.done()
})
