import Vuex from 'vuex'
import Vue from 'vue'
import Firebase from 'firebase'

Vue.use(Vuex)

export default {
  state: {
    formEntries: [],
    formID: 'f1'
  },
  getters: {
    getFormEntries: state => {
      return state.formEntries
    },
    getFormID: state => {
      return state.formID
    }
  },
  mutations: {
    setFormEntries: state => {
      Firebase.database().ref('createdForms/'.concat(state.formID).concat('/entries'))
        .on('value', function (snapshot) {
          const value = snapshot.val()
          state.formEntries = Object.keys(value).map(formEntryKey => value[formEntryKey])
        })
    }
  },
  actions: {
    setFormEntries: context => {
      context.commit('setFormEntries')
    }
  }
}
