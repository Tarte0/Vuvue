<template>
  <div>
    <c-question
      :question="question"
      @edit="editQuestion"
    />
    <br/>
    <c-answer/>
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
