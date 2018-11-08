<template>
  <div>
    <div v-if = "editable">
        <base-input-question type ="text" :v-model="text" :value="text" @keydown.enter="changeEditableValue"/>
    </div>
    <div v-else>
        {{text}}
    </div>
  </div>

</template>

<script>
import BaseInputQuestion from './BaseInputQuestion'
export default {
  name: 'EditableText',
  components: {BaseInputQuestion},
  msg: 'blabla',
  props: ['text', 'editable'],
  methods: {
    changeEditableValue () {
      this.$emit('EditBoolValue', event.target.value)
    }
  }
}

</script>

<style scoped>

</style>
