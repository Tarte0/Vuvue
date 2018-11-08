<template>
  <div>
    <!-- {{ question.text }}  -->
    <EditableText  :text="question.text" :editable="editable" @EditBoolValue="returnEdit"/>
    <remove-button @remove="removeQuestion"/>
    <edit-button @edit="activeEdit"/>
  </div>
</template>

<script>
import RemoveButton from './RemoveButton'
import EditButton from './EditButton'
import EditableText from './EditableText'

export default {
  name: 'questionC',
  data () {
    return {
      editable: false
    }
  },
  components: {EditButton, RemoveButton, EditableText},
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
    activeEdit () {
      this.editable = true
    },
    returnEdit (value) {
      this.$store.commit('editQuestion', {'id': this.question.id, 'text': value})
      this.editable = false
    }
  }
}
</script>

<style scoped>

</style>
