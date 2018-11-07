import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Stev from '@/components/Stev'
import Form from '@/components/creator/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/stev',
      name: 'stev',
      component: Stev
    },
    {
      path: '/Creator',
      name: 'Creator',
      component: Form
    }
  ]
})
