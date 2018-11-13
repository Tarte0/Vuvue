import Vuex from 'vuex'
import Vue from 'vue'
import Firebase from 'firebase'

Vue.use(Vuex)

export default {
  state: {
    formEntries: [],
    formID: ''
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
          if (value) state.formEntries = Object.keys(value).map(formEntryKey => value[formEntryKey])
          else state.formEntries = null
        })
    },
    setFormID: (state, {formID}) => {
      state.formID = formID
    }
  },
  actions: {
    setFormEntries: context => {
      context.commit('setFormEntries')
    },
    setFormID: (context, {formID}) => {
      context.commit('setFormID', {formID})
      context.commit('setFormEntries')
    }
  }
}
