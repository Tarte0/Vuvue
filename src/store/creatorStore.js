import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    idQ: 1,
    questions: [
    ],
    answers: [
    ]
  },
  getters: {
    getQuestionList: state => {
      return state.questions
    },
    getAnswerList: state => {
      return state.answers
    },
    findAnswer: (state) => (id) => {
      return state.answers.find(function (elem) {
        return elem.id === id
      })
    }
  },
  mutations: {
    addQuestion (state, txt) {
      let id = state.idQ++
      console.log('add', id)
      state.questions.push(
        {
          id: id,
          text: txt
        }
      )
      state.answers.push(
        {
          id: id,
          type: 'Text',
          answers: []
        }
      )
      console.log('q', state.answers)
    },
    removeQuestion (state, idToRemove) {
      console.log(idToRemove)
      state.questions = state.questions.filter(question => {
        return question.id !== idToRemove
      })
    },
    editQuestion (state, question) {
      state.questions.find(function (elem) {
        return elem.id === question.id
      }).text = question.text
    },
    addAnswer (state, answer) {
      state.answers.push(answer)
    },
    modifyAnswer (state, answer) {
      let E = state.answers.find(function (elem) {
        return elem.id === answer.id
      })
      E.type = answer.type
      E.answers = answer.answers
    }
  },
  actions: {
    addQuestion ({commit}, questionText) {
      this.commit('addQuestion', questionText)
    },
    addAnswer ({commit}, answer) {
      this.commit('addAnswer', answer)
    },
    modifyAnswer ({commit}, answer) {
      this.commit('modifyAnswer', answer)
    },
    removeQuestion ({commit}, idToRemove) {
      this.commit('removeQuestion', idToRemove)
    },
    editQuestion ({commit}, question) {
      this.commit('editQuestion', question)
    }
  }
}
