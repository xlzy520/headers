import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '初始页',
      component: () => import('@/views/index')
    },
    {
      path: '/hao123moe',
      name: '好123萌主页',
      component: () => import('@/views/hao123moe')
    }
  ]
})
