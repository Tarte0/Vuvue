// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {firebaseConfig} from '../private/firebaseConfig'
import Firebase from 'firebase'

Vue.config.productionTip = false

// Firebase init
Firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>',
  created () {
    this.$store.dispatch('setFormEntries')
    this.$store.dispatch('setFormID', {formID: null})
  }
})
