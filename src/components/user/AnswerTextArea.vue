<template>
    <div>
      <textarea v-model="selectedAnswers" v-on:input="onChange($event.target)"></textarea>
    </div>
</template>

<script>
export default {
  name: 'AnswerTextArea',
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
  textarea {
    resize: none;
  }
</style>
