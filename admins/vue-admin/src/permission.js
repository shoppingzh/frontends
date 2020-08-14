import router from '@/router'
import NProgress from '@/plugins/nprogress'

NProgress.configure({
  showSpinner: true
})

router.beforeEach((to, from, next) => {

  NProgress.start()
  setTimeout(() => {
    next()
  }, 3000)

})

router.afterEach(() => {
  NProgress.done()
})
