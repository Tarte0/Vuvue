<template>
  <div class="answer">
    <div v-if="!alreadyAnswered">
      <div v-if="answer.type === 'textArea'">
        <AnswerTextArea :entryID="entryID"/>
      </div>
      <div v-if="answer.type === 'text'">
        <AnswerText :entryID="entryID"/>
      </div>
      <div v-if="answer.type === 'radioButton'">
        <AnswerRadioButton :answers="answer.answers" :entryID="entryID"/>
      </div>
      <div v-if="answer.type === 'checkBox'">
        <AnswerCheckBox :answers="answer.answers" :entryID="entryID"/>
      </div>
    </div>
    <div v-else class="alreadyAnsweredDiv">
      <h3>Cette question à deja une réponse</h3>
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
  props: ['answer', 'entryID', 'alreadyAnswered']
}
</script>

<style scoped>
  .answer{
    margin: 1em;
  }
  .alreadyAnsweredDiv {
    color: #42b983;
  }
</style>
