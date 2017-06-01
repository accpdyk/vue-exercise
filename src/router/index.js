import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resize from '@/components/Resize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resize',
      name: 'Resize',
      component: Resize
    },
  ]
})
