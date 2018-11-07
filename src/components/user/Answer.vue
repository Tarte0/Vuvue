<template>
  <div>
    <div v-if = "type === 'textArea'">
      <AnswerTextArea/>
    </div>
    <div v-if = "type === 'text'">
      <AnswerText/>
    </div>
    <div v-if = "type === 'radioButton'">
      <AnswerRadioButton :answers="answers"/>
    </div>
    <div v-if = "type === 'checkBox'">
      <AnswerCheckBox :answers="answers"/>
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
  data () {
    return {
      type: 'checkBox',
      answers: [{text: 'zizou'}, {text: 'keke'}]
    }
  }
}
</script>

<style scoped>

</style>
