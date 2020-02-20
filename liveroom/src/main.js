import Vue from 'vue'
import App from './App.vue'

import '@/styles/app.css'
import router from './router'

// plugins
import '@/plugins/element-ui'
import '@/plugins/axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
