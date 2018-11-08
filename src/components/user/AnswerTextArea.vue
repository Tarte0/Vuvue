<template>
    <div>
      <textarea v-model="selectedAnswers"></textarea>
    </div>
</template>

<script>
export default {
  name: 'AnswerTextArea',
  data () {
    return {
      selectedAnswers: null
    }
  }
}
</script>

<style scoped>

</style>
