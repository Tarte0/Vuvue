<template>
    <base-input-question v-if = "editable" type ="text" :v-model="text" :value="text" @keydown.enter="changeEditableValue"/>
    <span v-else>
        {{text}}
    </span>
</template>

<script>
import BaseInputQuestion from './BaseInputQuestion'
export default {
  name: 'EditableText',
  components: {BaseInputQuestion},
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
