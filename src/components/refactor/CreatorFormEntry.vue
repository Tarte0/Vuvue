<template>
  <div class="formEntry">
    <form>
      <input title="" type="text" class="questionTitle" v-model="entry.title"/>
      <select title="">
        <option v-for="(t, i) in types" :key="i" :name="t.value" :value="t.value"> {{t.displayName}}</option>
      </select>
      <CreatorAnswer :initialAnswers="initialEntry.answers" :initialType="initialEntry.type"></CreatorAnswer>
    </form>
  </div>
</template>

<script>
import CreatorAnswer from './CreatorAnswer'
export default {
  name: 'CreatorFormEntry',
  components: {CreatorAnswer},
  props: {
    initialEntry: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      entry: {...this.initialEntry},
      // fetch types into FB later
      types: [
        {value: 'radiobutton', displayName: 'Choix multiples'},
        {value: 'text', displayName: 'Réponse courte'},
        {value: 'textarea', displayName: 'Paragraphe'},
        {value: 'checkbox', displayName: 'Cases à cocher'},
        {value: 'select', displayName: 'Liste déroulante'}
      ]
    }
  }
}
</script>

<style scoped>
  .formEntry {
    background-color: #f6f6f6;
    margin: 1em;
    border: 1px solid #00000020
  }
</style>
