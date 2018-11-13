<template>
  <div class="form" v-if="formEntries" >
    <FormEntry v-for="entry in formEntries"
               :key="entry.id"
               :entry="entry"/>
    <button @click="saveAnswers">Enregistrer</button>
  </div>
  <div v-else>
    <h1 class="errorMessage">Formulaire inconnu !</h1>
  </div>
</template>

<script>
import FormEntry from '@/components/user/FormEntry'
import {setSelectedAnswersFB} from '@/thunks/formEntriesThunks'
export default {
  name: 'UserForm',
  components: {FormEntry},
  data () {
    return {
      selectedAnswers: {}
    }
  },
  computed: {
    formEntries () {
      return this.$store.getters.getFormEntries
    },
    formID () {
      return this.$store.getters.getFormID
    }
  },
  created: function () {
    this.$root.$on('set-selected-answers', (id, answers) => {
      this.setSelectedAnswers(id, answers)
    })
    this.$store.dispatch('setFormID', {formID: this.$route.params.formID})
  },
  methods: {
    setSelectedAnswers (id, answers) {
      const tmp = {...this.selectedAnswers}
      tmp[id] = answers
      this.selectedAnswers = tmp
    },
    saveAnswers () {
      setSelectedAnswersFB(this.formID, this.selectedAnswers)
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('setFormID', {formID: this.$route.params.formID})
    }
  }
}
</script>

<style scoped>
  .errorMessage {}
</style>
