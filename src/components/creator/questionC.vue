<template>
  <li>
    {{ question.text }}
    <button @click="$emit('remove', question.id)">
      X
    </button>
    <button @click="$emit('edit', question.id)">
      M
    </button>
  </li>
</template>

<script>
export default {
  name: 'questionC',
  props: {
    question: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
