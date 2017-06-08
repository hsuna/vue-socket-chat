import Vue from 'vue'
import Router from 'vue-router'

// 引用模板
import login from '../page/login.vue'
import chat from '../page/chat.vue'


Vue.use(Router)

// 配置路由
const router = new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/chat',
      component: chat
    },
/*    {
      path: '/user',
      component: chatIndex,
      children: [
        {path: '/', component: userIndex},
        {path: 'info', component: userInfo},
        {path: 'love', component: userLove}
      ]
    }*/
  ]
})

export default router