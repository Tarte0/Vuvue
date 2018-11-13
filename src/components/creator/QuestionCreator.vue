<template>
  <div class="question">
    <c-question
      :question="question"
    />
    <c-answer
      :answer="answer"
    />
  </div>
</template>

<script>
import CQuestion from './CreatedQuestion'
import CAnswer from './CreatedAnswer'

export default {
  name: 'QuestionCreator',
  props: {
    question: {
      type: Object,
      required: true
    },
    answer: {
      type: Object,
      required: true
    }
  },
  components: {CAnswer, CQuestion}
}
</script>

<style scoped>
.question{
}
</style>
