<template>
  <div>
    <div v-for="q in questions"
          :key="q.id">
        <QuestionCreator
          :question="q"
          :answer="answer(q.id)"
        />
    </div>
    <button v-if="!afficheCreate" @click="showAdd">
      +
    </button>
    <base-input-question v-else
                         v-model="newQuestionText"
                         placeholder="new Question"
                         @keydown.enter="addQuestion"
    />
  </div>
</template>

<script>
import QuestionCreator from './QuestionCreator'
import BaseInputQuestion from './BaseInputQuestion'

export default {
  name: 'Form',
  data () {
    return {
      newQuestionText: '',
      afficheCreate: false
    }
  },
  computed: {
    questions () {
      return this.$store.getters.getQuestionList
    }
  },
  components: {QuestionCreator, BaseInputQuestion},
  methods: {
    showAdd () {
      this.afficheCreate = true
    },
    addQuestion () {
      const txt = this.newQuestionText
      if (txt) {
        this.$store.dispatch('addQuestion', txt)
      }
      this.newQuestionText = ''
      this.afficheCreate = false
    },
    answer (id) {
      return this.$store.getters.findAnswer(id)
    }
  }
}
</script>

<style scoped>

</style>
