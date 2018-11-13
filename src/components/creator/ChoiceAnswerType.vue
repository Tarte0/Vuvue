<template>
  <div>
      <input v-for="T in types" :key=T class="choices" type="button" :value=T @click="$emit('chosenType', T)"/>
  </div>
</template>

<script>
export default {
  name: 'ChoiceAnswerType',
  data () {
    return {
      types: ['Text', 'TextArea', 'Select', 'RadioButton', 'CheckBox']
    }
  }
}
</script>

<style scoped>
.choices {
  width: 100px;
  height: 30px;
}
</style>
