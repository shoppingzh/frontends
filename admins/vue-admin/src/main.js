import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import '@/plugins/element-ui'
import '@/plugins/lodash'
import '@/plugins/xp'
import '@/style/index.scss'
import './permission'
import '@/utils/common/theme'
import '@/style/theme.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
