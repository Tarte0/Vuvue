<template>
  <div>
    <div v-for="answer in answers" :key="answer.text">
      <input type="radio" name = "answer.text" :key="answer.text" v-model = "selectedAnswers">
      {{answer.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerRadioButton',
  data () {
    return {
      selectedAnswers: []
    }
  },
  props: ['answers']
}
</script>

<style scoped>

</style>
