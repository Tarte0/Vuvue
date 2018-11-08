import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const formEntries = [
  {
    question: {title: 'C\'est une kestion'},
    answer: {type: 'radioButton', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]}
  },
  {
    question: {title: 'C\'est une deuziem kestion'},
    answer: {type: 'checkBox', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]}
  },
  {
    question: {title: 'C\'est une 3 kestion'},
    answer: {type: 'text', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]}
  },
  {
    question: {title: 'C\'est une 4 kestion'},
    answer: {type: 'textArea', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]}
  }
]

export const userStore = new Vuex.Store({
  state: {
    formEntries
  },
  actions: {},
  mutations: {}
})
