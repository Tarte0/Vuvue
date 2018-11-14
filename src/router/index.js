import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserForm from '@/components/user/UserForm'
import CreatorForm from '@/components/refactor/CreatorForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/form/:formID',
      name: 'form',
      component: UserForm
    },
    {
      path: '/creator/form',
      name: 'creatorForm',
      component: CreatorForm
    }
  ]
})
