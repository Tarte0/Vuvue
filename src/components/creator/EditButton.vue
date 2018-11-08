<template>
    <button @click="$emit('edit')">
      M
    </button>
</template>

<script>
export default {
  name: 'EditButton'
}
</script>

<style scoped>
button {
  background-color: darkgoldenrod;
}
</style>
