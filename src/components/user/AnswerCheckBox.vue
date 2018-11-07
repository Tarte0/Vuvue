<template>
  <div>
    <div v-for="answer in answers" :key="answer.text">
      <input type="checkbox" name = "answer.text" :key="answer.text">
      {{answer.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerCheckBox',
  props: ['answers']
}
</script>

<style scoped>

</style>
