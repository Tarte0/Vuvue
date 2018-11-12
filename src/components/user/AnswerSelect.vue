<template>
  <div>
    <form>
      <select @change="onChange($event.target)">
        <option value="-1"> </option>
         <option v-for="(a, i) in answers" :key="a.text" :name="a.text" :value="i"> {{a.text}} </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AnswerSelect',
  data () {
    return {
      selectedAnswers: null
    }
  },
  props: ['answers', 'entryID'],
  methods: {
    onChange: function (target) {
      if (target.value > 0) {
        this.selectedAnswers = target.value
        this.setSelectedAnswers()
      } else {
        this.selectedAnswers = null
      }
    },
    setSelectedAnswers: function () {
      this.$root.$emit('set-selected-answers', this.entryID, this.selectedAnswers)
    }
  }
}
</script>

<style scoped>

</style>
