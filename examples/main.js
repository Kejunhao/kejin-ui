import Vue from 'vue'
import App from './App.vue'
import router from './router'
import KUI from '../packages'
Vue.config.productionTip = false

Vue.use(KUI)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
