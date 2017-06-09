// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSocketio from 'vue-socket.io'


import App from './App.vue'
import router from './config/router'
import api from './config/api'

Vue.use(VueSocketio, 'http://localhost:3000');
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
