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
  props: {
    type: Object,
    required: true
  },
  methods: {
    editAnswer () {
    }
  }
}
</script>

<style scoped>

</style>
