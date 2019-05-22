<template>
  <img :src="image">
</template>

<script>
export default {
  name: 'VImage',
  props: {
    path: {
      type: String
    }
  },
  computed: {
    image () {
      return require(`@/assets/images/${this.path}`)
    }
  }
}
</script>
