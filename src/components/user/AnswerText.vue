<template>
    <div>
      <input type="text" v-model="selectedAnswers" v-on:input="onChange($event.target)"/>
    </div>
</template>

<script>
export default {
  name: 'AnswerText',
  data () {
    return {
      selectedAnswers: null
    }
  },
  props: ['entryID'],
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
