import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Stev from '@/components/Stev'
import Form from '@/components/creator/Form'
import UserForm from '@/components/user/UserForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Creator',
      name: 'Creator',
      component: Form
    },
    {
      path: '/user/form',
      name: 'form',
      component: UserForm
    }
  ]
})
