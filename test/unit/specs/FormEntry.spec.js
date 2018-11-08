import Vue from 'vue'
import FormEntry from '@/components/user/FormEntry'

const mockEntry =
  {
    question: {title: 'Question 1'},
    answer: {type: 'radioButton', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]},
    id: 'Q1',
    alreadyAnswered: false
  }

describe('FormEntry.vue', () => {
  const Constructor = Vue.extend(FormEntry)
  const vm = new Constructor({
    propsData: {
      entry: mockEntry
    }
  }).$mount()
  it('title should be same as mock', () => {
    expect(vm.$el.querySelector('#title').textContent)
      .toEqual(mockEntry.question.title)
  })
  it('answer input type should be same as mock (radio)', () => {
    expect(vm.$el.querySelector('.answer input').type)
      .toEqual('radio')
  })
})
