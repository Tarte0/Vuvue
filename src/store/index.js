import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    nbQ: 1,
    questions: [
      {
        id: 0,
        text: 'Test Question ?'
      }
    ]
  },
  mutations: {
    addQuestion (state, txt) {
      this.state.questions.push(
        {
          id: this.state.nbQ++,
          text: txt
        }
      )
    },
    removeQuestion (state, idToRemove) {
      console.log(idToRemove)
      this.state.questions = this.state.questions.filter(question => {
        return question.id !== idToRemove
      })
    }
  }
})
