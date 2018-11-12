<template>
  <div>
    <c-question
      :question="question"
    />
    <br/>
    <c-answer
      :id="question.id"
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

</style>
