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
      name: 'hao123萌主页 - 只属于你的二次元主页_hao123上网导航',
      component: () => import('@/views/hao123moe')
    },
    {
      path: '/bilibili',
      name: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
      component: () => import('@/views/bilibili')
    }
  ]
})
