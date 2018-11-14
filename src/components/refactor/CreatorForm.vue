<template>
  <div>
    <input title="" type="text" class="formTitle" v-model="defaultFormTitle"/>
    <button @click="addQuestion">Ajouter une question</button>
    <CreatorFormEntry v-for="entry in formEntries"
              :key="entry.id"
              :initialEntry="entry"/>
  </div>
</template>

<script>
import CreatorFormEntry from './CreatorFormEntry'
import EditableText from '../creator/EditableText'
export default {
  name: 'CreatorForm',
  components: {EditableText, CreatorFormEntry},
  data () {
    return {
      formEntries: [],
      defaultFormEntry: {title: '', type: 'radiobutton', answers: ['Option 1']},
      defaultFormTitle: 'Formulaire sans titre'
    }
  },
  methods: {
    addQuestion () {
      this.formEntries.push(this.defaultFormEntry)
    }
  }
}
</script>

<style scoped>
  input[type=text] {
    border: none;
    border-bottom: 1px solid lightgrey;
  }
</style>
