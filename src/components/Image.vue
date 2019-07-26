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
      return `https://img.als-yuchuan.com/${this.path}`
    }
  }
}
</script>
