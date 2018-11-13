import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/creator',
      name: 'creator',
      component: Form
    },
    {
      path: '/user/form',
      name: 'form',
      component: UserForm
    }
  ]
})
