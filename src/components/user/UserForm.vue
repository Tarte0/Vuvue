<template>
  <div class="form">
    <FormEntry v-for="entry in formEntries"
               :key="entry.id"
               :entry="entry"/>
    <button @click="saveAnswers">Enregistrer</button>
  </div>
</template>

<script>
import FormEntry from '@/components/user/FormEntry'
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
      return this.$store.state.formEntries
    }
  },
  created: function () {
    this.$root.$on('set-selected-answers', (id, answers) => {
      this.setSelectedAnswers(id, answers)
    })
  },
  methods: {
    setSelectedAnswers (id, answers) {
      const tmp = {...this.selectedAnswers}
      tmp[id] = answers
      this.selectedAnswers = tmp
    },
    saveAnswers () {
      console.log(this.selectedAnswers)
    }
  }
}
</script>

<style scoped>
  .form {}
</style>
