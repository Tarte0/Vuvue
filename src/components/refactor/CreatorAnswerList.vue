<template>
  <div>
    <div v-for="(a,i) in initialAnswers" :key="i">
      <span>
        {{getSymbol(type)}}
      </span>
      <span>
        {{a}}
      </span>
    </div>
    <button>Ajouter une option</button>
  </div>
</template>

<script>
export default {
  name: 'CreatorAnswerList',
  props: {
    initialAnswers: {
      type: Array,
      required: true
    },
    initialType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      answers: [...this.initialAnswers],
      type: this.initialType.slice()
    }
  },
  methods: {
    getSymbol (type) {
      const icons = {radiobutton: '.', checkbox: '_', select: '>'}
      return icons[type]
    }
  }
}
</script>

<style scoped>

</style>
