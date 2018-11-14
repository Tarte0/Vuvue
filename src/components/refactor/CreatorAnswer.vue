<template>
  <div>
    <div v-if="initialType === 'textarea'">
      <p>Réponse longue</p>
    </div>
    <div v-if="initialType === 'text'">
      <p>Réponse courte</p>
    </div>
    <div v-if="initialType === 'radiobutton' || initialType === 'checkbox' || initialType === 'select' ">
      <CreatorAnswerList :initialAnswers="initialAnswers" :initialType="initialType" />
    </div>
    <div v-else>
      <p>Type inconnu</p>
    </div>
  </div>
</template>

<script>
import CreatorAnswerList from './CreatorAnswerList'
export default {
  name: 'CreatorAnswer',
  components: {CreatorAnswerList},
  props: {
    initialAnswers: {
      type: Array,
      required: true
    },
    initialType: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
