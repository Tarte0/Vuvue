<template>
  <div>
    <question-c
      :question="question"
      @remove="removeQuestion"
      @edit="editQuestion"
    ></question-c>
    <reponse-c></reponse-c>
  </div>
</template>

<script>
import QuestionC from './questionC'
import ReponseC from './answerC'

export default {
  name: 'QuestionCreator',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  components: {ReponseC, QuestionC},
  methods: {
    removeQuestion (idToRemove) {
      this.$store.commit('removeQuestion', idToRemove)
    }
  }
}
</script>

<style scoped>

</style>
