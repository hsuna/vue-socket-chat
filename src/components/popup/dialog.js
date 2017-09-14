import Vue from 'vue'
import viewDialog from './dialog.vue'

const Dialog = Vue.extend(viewDialog)


const android = (function(){
  let u = navigator.userAgent.toLowerCase();
  return (u.indexOf('android') > -1)?true:false;
})()

export default function (options = {}) {
  const defaultOption = {
      title: 'Title',
      content: 'Content...',
      assistBtn: 'Assist Button',
      mainBtn: 'Main button',
      assistFn () { console.log('Assist Button') },
      mainFn () { console.log('Main Button') }
  }

  let dialogObj = Object.assign(defaultOption, options)

  const instance = new Dialog({
    el: document.createElement('div')
  })

  instance.android = android
  instance.dialogObj = dialogObj

  Vue.nextTick(() => {
    document.body.appendChild(instance.$el)
    instance.showIt = true
  })
}
