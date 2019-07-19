<template>
  <section
    :class="klass"
    :style="appHeroStyle"
  >
    <div class="container">
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
    klass () {
      return [
        'app-hero',
        this.color && 'has-background-' + this.color
      ]
    },
    appHeroStyle () {
      const style = {
      }

      if (this.height) {
        style.height = this.height
      }
      if (this.imageURL) {
        style['background-repeat'] = this.repeat
        style['background-image'] = this.imageURL
        style['background-size'] = 'cover'
      }

      return style
    }
  }
}
</script>
