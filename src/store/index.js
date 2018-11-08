import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    idQ: 1,
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
          id: this.state.idQ++,
          text: txt
        }
      )
    },
    removeQuestion (state, idToRemove) {
      console.log(idToRemove)
      this.state.questions = this.state.questions.filter(question => {
        return question.id !== idToRemove
      })
    },
    editQuestion (state, idToModif, newValue) {
      this.state.questions.find(function (elem) {
        return elem.id === idToModif
      }).text = newValue
    }
  }
})
