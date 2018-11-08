<template>
  <div>
    {{ question.text }}
    <remove-button @remove="removeQuestion"/>
    <edit-button @edit="editQuestion"/>
  </div>
</template>

<script>
import RemoveButton from './RemoveButton'
import EditButton from './EditButton'

export default {
  name: 'CQuestion',
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
