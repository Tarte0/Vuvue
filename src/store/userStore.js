import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const formEntries = [
  {
    question: {title: 'Question 1'},
    answer: {type: 'radioButton', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]},
    id: 'Q1',
    alreadyAnswered: false
  },
  {
    question: {title: 'Question 2'},
    answer: {type: 'checkBox', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]},
    id: 'Q2',
    alreadyAnswered: false
  },
  {
    question: {title: 'Question 3'},
    answer: {type: 'text', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]},
    id: 'Q3',
    alreadyAnswered: false
  },
  {
    question: {title: 'Question 4'},
    answer: {type: 'textArea', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]},
    id: 'Q4',
    alreadyAnswered: false
  },
  {
    question: {title: 'Question 5'},
    answer: {type: 'checkBox', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]},
    id: 'Q5',
    alreadyAnswered: true
  }
]

export const userStore = new Vuex.Store({
  state: {
    formEntries
  },
  actions: {},
  mutations: {}
})
