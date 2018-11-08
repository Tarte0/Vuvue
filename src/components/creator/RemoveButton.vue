<template>
    <button @click="$emit('remove', '')">
      X
    </button>
</template>

<script>
export default {
  name: 'RemoveButton'
}
</script>

<style scoped>
button {
  background-color: #ff2631;
}
</style>
