<template>
  <div>
    <ul>
      <QuestionCreator
        v-for="q in this.$store.state.questions"
        :key="q.id"
        :question="q"
      />
    </ul>
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
  components: {QuestionCreator, BaseInputQuestion},
  methods: {
    showAdd () {
      this.afficheCreate = true
    },
    addQuestion () {
      const txt = this.newQuestionText
      if (txt) {
        this.$store.commit('addQuestion', txt)
      }
      this.newQuestionText = ''
      this.afficheCreate = false
    }
  }
}
</script>

<style scoped>

</style>
