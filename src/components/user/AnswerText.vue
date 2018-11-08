<template>
    <div>
      <input type="text" v-model="selectedAnswers"/>
    </div>
</template>

<script>
export default {
  name: 'AnswerText',
  data () {
    return {
      selectedAnswers: null
    }
  }
}
</script>

<style scoped>

</style>
