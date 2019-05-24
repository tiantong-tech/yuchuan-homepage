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
    height: {
      type: String,
      default: '600px'
    },
    image: {
      type: [String]
    },
    position: {
      default: 'center'
    },
    repeat: {
      default: 'no-repeat',
    },
    attachment: {
      default: 'scroll'
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
        style['background-repeat'] = this.repeat
        style['background-image'] = this.imageURL
        style['background-position'] = this.position
        style['background-size'] = `100% ${this.height}`
        style['background-attachment'] = this.attachment
      }

      return style
    }
  }
}
</script>
