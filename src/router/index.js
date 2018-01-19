import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/pageIndex'
import zc from '@/components/page/zc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/zc',
      name: 'zc',
      component: zc
    }
  ]
})
