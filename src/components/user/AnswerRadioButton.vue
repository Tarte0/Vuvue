<template>
  <div>
    <form>
      <span v-for="(a, i) in answers" :key="a.text">
        <input type="radio" :name="a.text" :value="i" v-model="selectedAnswers">
        <label> {{a.text}} </label>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AnswerRadioButton',
  data () {
    return {
      selectedAnswers: null
    }
  },
  props: ['answers']
}
</script>

<style scoped>

</style>
