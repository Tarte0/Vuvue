<template>
  <div>
    <div v-if="answer.type === 'textArea'">
      <AnswerTextArea/>
    </div>
    <div v-if="answer.type === 'text'">
      <AnswerText/>
    </div>
    <div v-if="answer.type === 'radioButton'">
      <AnswerRadioButton :answers="answer.answers"/>
    </div>
    <div v-if="answer.type === 'checkBox'">
      <AnswerCheckBox :answers="answer.answers"/>
    </div>
  </div>

</template>

<script>
import AnswerTextArea from './AnswerTextArea'
import AnswerText from './AnswerText'
import AnswerRadioButton from './AnswerRadioButton'
import AnswerCheckBox from './AnswerCheckBox'
export default {
  name: 'Answer',
  components: {AnswerText, AnswerTextArea, AnswerRadioButton, AnswerCheckBox},
  props: ['answer']
}
</script>

<style scoped>

</style>
