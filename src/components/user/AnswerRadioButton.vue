<template>
  <div>
    <form>
      <span v-for="(a, i) in answers" :key="a.text">
        <input type="radio" :name="a.text" :value="i" v-model="selectedAnswers" v-on:input="onChange($event.target)">
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
  props: ['answers', 'entryID'],
  methods: {
    onChange: function (target) {
      this.selectedAnswers = target.value
      this.setSelectedAnswers()
    },
    setSelectedAnswers: function () {
      this.$root.$emit('set-selected-answers', this.entryID, this.selectedAnswers)
    }
  }
}
</script>

<style scoped>

</style>
