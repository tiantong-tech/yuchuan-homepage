<template>
  <div
    class="container has-text-centered"
    style="padding-top: 1.5rem; margin-bottom: 3rem"
  >
    <h2
      class="is-size-3"
      style="margin-bottom: 1.5rem"
    >
      使用案例
    </h2>
    <div class="columns is-centered">
      <div
        v-for="image in images" :key="image"
        class="column"
        style="padding-bottom: 0"
      >
        <VImage :path="image" style="width: 100%; height: 100%"></VImage>
      </div>
      <div class="column" style="padding-bottom: 0">
        <VImage
          path="hoisters/case-3.jpg"
          style="width: 100%; height: 100%"
        ></VImage>
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
