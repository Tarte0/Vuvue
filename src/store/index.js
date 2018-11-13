import Vuex from 'vuex'
import Vue from 'vue'
import creatorStore from './creatorStore'
import userStore from './userStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    creatorStore,
    userStore
  }
})
