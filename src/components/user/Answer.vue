<template>
  <div class="answer">
    <div v-if="!alreadyAnswered">
      <div v-if="answer.type === 'textArea'">
        <AnswerTextArea :entryID="entryID"/>
      </div>
      <div v-if="answer.type === 'text'">
        <AnswerText :entryID="entryID"/>
      </div>
      <div v-if="answer.type === 'radiobutton'">
        <AnswerRadioButton :answers="answer.answers" :entryID="entryID"/>
      </div>
      <div v-if="answer.type === 'checkbox'">
        <AnswerCheckBox :answers="answer.answers" :entryID="entryID"/>
      </div>
      <div v-if="answer.type === 'select'">
        <AnswerSelect :answers="answer.answers" :entryID="entryID"/>
      </div>
    </div>
    <div v-else class="alreadyAnsweredDiv">
      <h3>Cette question a déjà une réponse</h3>
    </div>
  </div>

</template>

<script>
import AnswerTextArea from './AnswerTextArea'
import AnswerText from './AnswerText'
import AnswerRadioButton from './AnswerRadioButton'
import AnswerCheckBox from './AnswerCheckBox'
import AnswerSelect from './AnswerSelect'
export default {
  name: 'Answer',
  components: {AnswerText, AnswerTextArea, AnswerRadioButton, AnswerCheckBox, AnswerSelect},
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
