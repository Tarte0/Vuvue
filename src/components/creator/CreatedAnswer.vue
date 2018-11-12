<template>
  <div>
    Answer's type
    <edit-button @edit="editAnswer"/>
  </div>
</template>

<script>
import EditButton from './EditButton'
export default {
  name: 'Canswer',
  components: {EditButton},
  data (){
    return {
      type,
      answers: [
      ]
    }
  },
  props: {
    id,
    required: true
  },
  methods: {
    editAnswer () {
    }
  },
  created (){
    this.type = "textArea"
    this.$store.dispatch('addAnswer', {id: this.id, type: this.type, answers: this.answers })
  }
}
</script>

<style scoped>

</style>
