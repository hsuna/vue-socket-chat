import Vue from 'vue'

import Dialog from './popup/dialog.vue'
import Toast from './popup/toast.vue'

import DialogFun from './popup/dialog.js'
import ToastFun from './popup/toast.js'

const Components = {
  Dialog,
  Toast
}

const install = function () {
  Object.keys(Components).forEach((key) => {
    Vue.component(key, Components[key])
  })

  Vue.prototype.$dialog = DialogFun
  Vue.prototype.$toast = ToastFun
}

export default Object.assign(Components, { install })
