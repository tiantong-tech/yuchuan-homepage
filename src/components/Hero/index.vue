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
      default: '600px'
    }
  },
  computed: {
    imageURL () {
      return !this.image ? false
        : `url("http://img.als-yuchuan.com/${this.image}")`
    },
    containerClass () {
      return [
        'container',
        this.color && 'has-text-' + this.color
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
