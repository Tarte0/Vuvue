<template>
  <div>
    <FormEntry v-for="(entry, i) in formEntries"
               :key="i"
               :question="entry.question"
               :answer="entry.answer"/>
  </div>
</template>

<script>
import FormEntry from '@/components/user/FormEntry'
export default {
  name: 'UserForm',
  components: {FormEntry},
  computed: {
    formEntries () {
      return this.$store.state.formEntries
    }
  }
}
</script>

<style scoped>

</style>
