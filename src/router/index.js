import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/pageIndex.vue'
import zc from '@/components/zc/zc.vue'
import report from '@/components/com_report/report.vue'

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
