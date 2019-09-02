import '@/assets/css/tailwind.css'
import router from './router'
import Vue from 'vue'
import App from './App.vue'
import Results from './Results.vue'

Vue.config.productionTip = false

new Vue({
  router, // inject the router to make whole app router-aware
  render: h => h(App)
}).$mount("#app");