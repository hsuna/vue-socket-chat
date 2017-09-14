import Vue from 'vue'
import Router from 'vue-router'

// 引用模板
import login from '../page/login.vue'
import chat from '../page/chat.vue'
import setting from '../page/setting.vue'

//用户信息
import userinfo from '../util/userinfo'

Vue.use(Router)

// 配置路由
const router = new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/chat',
      component: chat
    },
    {
      path: '/setting',
      component: setting
    }
  ]
})

//重定向-判断用户是否登录过
router.beforeEach((to, from, next) => {
  if(to.path !== "/login"){
    if (!userinfo.isLogin()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
    next();
    }
  }else{
    next();
  }
})

export default router