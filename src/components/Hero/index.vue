<template>
  <section
    class="app-hero"
    :style="appHeroStyle"
  >
    <div :class="containerClass">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    color: {
      type: [String]
    },
    image: {
      type: [String]
    },
    height: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageURL () {
      return !this.image ? false
        : `url("${require('@/assets/images/' + this.image)}")`
    },
    containerClass () {
      return [
        'container',
        'has-text-' + this.color
      ]
    },
    appHeroStyle () {
      const style = {}

      if (this.height) {
        style.height = this.height
      }
      if (this.imageURL) {
        style['background-image'] = this.imageURL
        style['background-size'] = `100% ${this.height}`
      }

      return style
    }
  }
}
</script>
