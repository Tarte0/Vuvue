import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()
  it('', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Hello world !')
  })
})
