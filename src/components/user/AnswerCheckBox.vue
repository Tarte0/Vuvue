<template>
  <div>
    <form>
      <span v-for="(a, i) in answers" :key="a.text">
        <input type="checkBox" :name="a.text" :value="i" v-on:input="checkBoxChange($event.target)">
        <label> {{a.text}} </label>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AnswerCheckBox',
  props: ['answers'],
  data () {
    return {
      selectedAnswers: []
    }
  },
  methods: {
    checkBoxChange: function (target) {
      const index = this.selectedAnswers.indexOf(target.value)
      if (index >= 0) {
        if (!target.checked) this.selectedAnswers.splice(index, 1)
      } else {
        this.selectedAnswers.push(target.value)
      }
    }
  }
}

</script>

<style scoped>

</style>
