import Vue from 'vue'
import Stev from '@/components/Stev'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Stev)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.msgDiv h1').textContent)
      .toEqual('zsedrftg')
  })
})
