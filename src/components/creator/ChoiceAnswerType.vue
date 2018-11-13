<template>
  <div>
    <form>
      <input v-for="T in types" :key=T class="choices" type="button" :value=T @click="$emit('chosenType', T)"/>
    </form>
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
  width:7%;
}
</style>
