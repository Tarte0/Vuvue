<template>
    <div class="formEntry">
      <QuestionTitle :question="entry.question"/>
      <Answer :answer="entry.answer" :entryID="entry.id" :alreadyAnswered="entry.alreadyAnswered"/>
    </div>
</template>

<script>
import QuestionTitle from '@/components/user/QuestionTitle'
import Answer from '@/components/user/Answer'
export default {
  name: 'FormEntry',
  components: {Answer, QuestionTitle},
  props: ['entry']
}
</script>

<style scoped>
  .formEntry{
    background-color: #f6f6f6;
    margin: 1em;
    border: 1px solid #00000020
  }
</style>
