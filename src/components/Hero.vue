<template>
  <section
    class="hero is-large"
    :style="heroBodyStyle"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    image: {
      type: [String]
    },
    height: {
      type: String,
      default: '840px'
    }
  },
  computed: {
    imageURL () {
      return !this.image ? false
        : `url("${require('@/assets/images/' + this.image)}")`
    },
    heroBodyStyle () {
      return {
        'overflow': 'hidden',
        'height': this.height,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-attachment': 'scroll',
        'background-image': this.imageURL,
        'background-size': `100% ${this.height}`
      }
    }
  }
}
</script>
