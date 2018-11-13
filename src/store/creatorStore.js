import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    idform: "f1",
    idQ: 1,
    questions: [
      {
        id: 1,
        text: 'test'
      }
    ],
    answers:[
    ]
  },
  getters:{
    getQuestionList: state => {
      return state.questions
    },
  },
  mutations: {
    addQuestion (state, questionText) {
      this.state.questions.push({text: questionText,id: idQ++ })
    },
    removeQuestion (state, idToRemove) {
      console.log(idToRemove)
      this.state.questions = this.state.questions.filter(question => {
        return question.id !== idToRemove
      })
    },
    addAnswer (state, answer) {
      this.state.answers.push(answer)
    }
  },
  actions: {
    addQuestion ({commit}, questionText){
      this.commit('addQuestion', questionText)
    },
    addAnswer( {commit}, answer){
      this.commit('addAnswer', answer);
    },
    removeQuestion({commit}, idToRemove){
      this.commit('removeQuestion', idToRemove)
    },
  }
})
