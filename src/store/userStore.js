import Vuex from 'vuex'
import Vue from 'vue'
import Firebase from 'firebase'

Vue.use(Vuex)

export const userStore = new Vuex.Store({
  state: {
    formEntries: [],
    formID: 'f1',

    idQ: 1,
    questions: [
    ],
    answers: [
    ]
  },
  getters: {
    getFormEntries: state => {
      return state.formEntries
    },
    getFormID: state => {
      return state.formID
    },

    // Creat
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
    setFormEntries: state => {
      Firebase.database().ref('createdForms/'.concat(state.formID).concat('/entries'))
        .on('value', function (snapshot) {
          const value = snapshot.val()
          state.formEntries = Object.keys(value).map(formEntryKey => value[formEntryKey])
        })
    },

    // Creat
    addQuestion (state, txt) {
      let id = this.state.idQ++
      this.state.questions.push(
        {
          id: id,
          text: txt
        }
      )
      this.state.answers.push(
        {
          id: id,
          type: 'Text',
          answers: []
        }
      )
    },
    removeQuestion (state, idToRemove) {
      console.log(idToRemove)
      this.state.questions = this.state.questions.filter(question => {
        return question.id !== idToRemove
      })
    },
    editQuestion (state, question) {
      this.state.questions.find(function (elem) {
        return elem.id === question.id
      }).text = question.text
    },
    addAnswer (state, answer) {
      this.state.answers.push(answer)
    },
    modifyAnswer (state, answer) {
      let E = this.state.answers.find(function (elem) {
        return elem.id === answer.id
      })
      E.type = answer.type
      E.answers = answer.answers
    }
  },
  actions: {
    setFormEntries: context => {
      context.commit('setFormEntries')
    },

    // Creat
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
})
