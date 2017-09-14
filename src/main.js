// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import Socket from 'socket.io-client'

import App from './App.vue'
import Components from './components/index'

import router from './config/router'
//import api from './config/api'

if(process.env.NODE_ENV === 'production'){
  Vue.use(VueSocketio, 'http://chat.hsuna.com');
}else{
  Vue.use(VueSocketio, 'http://localhost:3000');
}
Vue.use(Components);

//Vue.prototype.$api = api

const FastClick = require('fastclick')
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
  /*,
  data: {
    eventHub: new Vue()
  }*/
})
