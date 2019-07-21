<template>
  <div
    class="container has-text-centered"
    style="padding-top: 2rem"
  >
    <h2
      class="is-size-3"
      style="margin-bottom: 2rem"
    >
      使用案例
    </h2>
    <div class="columns is-centered">
      <div
        v-for="image in images" :key="image"
        class="column is-narrow"
        style="min-width: 480px; max-width: 480px;"
      >
        <VImage :path="image" style="width: 100%; height: 100%"></VImage>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'Cases',
  components: {
    VImage
  },
  props: {
    images: {}
  }
}
</script>
