import Vue from 'vue'
import App from './App.vue'
import router from '../Router/main'
new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')