<template>
  <li>
    {{ question.text }}
    <remove-button @remove="removeQuestion"/>
    <edit-button @edit="editQuestion"/>
  </li>
</template>

<script>
import RemoveButton from './RemoveButton'
import EditButton from './EditButton'

export default {
  name: 'questionC',
  components: {EditButton, RemoveButton},
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeQuestion () {
      this.$store.commit('removeQuestion', this.question.id)
    },
    editQuestion () {
    }
  }
}
</script>

<style scoped>

</style>
