<template>
    <div>
      <QuestionTitle :question="question"/>
      <Answer :answer="answer"/>
    </div>
</template>

<script>
import QuestionTitle from '@/components/user/QuestionTitle'
import Answer from '@/components/user/Answer'
export default {
  name: 'FormEntry',
  components: {Answer, QuestionTitle},
  props: ['question', 'answer']
  /* data () {
    return {
      question: {title: 'C\'est une kestion'},
      answer: {type: 'radioButton', answers: [{text: 'a'}, {text: 'b'}, {text: 'c'}]}
    }
  } */
}
</script>

<style scoped>

</style>
