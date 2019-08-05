import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Select from '../packages/Select/index'

window.Vue = Vue

Vue.component('Select', Select)

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
