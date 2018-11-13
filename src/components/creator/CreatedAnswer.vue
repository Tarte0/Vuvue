<template>
  <div class="answerC">
    <ChoiceAnswerType @chosenType="choseType"/>
    <p> Answer's type : {{ answer.type }}</p>
    <!-- Config Component -->
  </div>
</template>

<script>
import EditButton from './EditButton'
import ChoiceAnswerType from './ChoiceAnswerType'
export default {
  name: 'Canswer',
  components: {ChoiceAnswerType, EditButton},
  data () {
    return {
      answers: [
      ]
    }
  },
  props: {
    answer: {
      type: Object,
      required: true
    }
  },
  methods: {
    choseType (type) {
      this.$store.dispatch('modifyAnswer', { id: this.answer.id, type: type, answers: this.answers })
      // this.type = type
    }
  }
}
</script>

<style scoped>
.answerC{
  background-color: #f6f6f6;
  margin: 1em;
  border: 1px solid #00000020
}
</style>
