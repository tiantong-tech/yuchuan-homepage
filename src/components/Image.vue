<template>
  <img :src="image">
</template>

<script>
export default {
  name: 'Image',
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
