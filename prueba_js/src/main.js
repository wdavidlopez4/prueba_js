import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {UserStore} from './assets/stores/UserStore.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: UserStore
}).$mount('#app')
