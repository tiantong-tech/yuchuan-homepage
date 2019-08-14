<template>
  <div class="container has-text-centered">
    <h2
      class="is-size-3"
      style="margin-bottom: 2rem"
    >主要装置</h2>
    <VImage style="width: 1000px;" :path="image"></VImage>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'Device',
  components: {
    VImage
  },
  props: {
    image: {}
  }
}
</script>
