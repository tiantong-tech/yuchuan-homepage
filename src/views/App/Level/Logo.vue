<template>
  <router-link
    tag="p"
    to="/"
    class="app-logo level-item is-flex is-flex-column"
  >
    <VImage
      path="common/logo.png"
      class="app-logo-image"
      style="width: 96px; height: 48px"
    ></VImage>
    <span>上海玉串自动化科技有限公司</span>
  </router-link>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'Logo',
  components: {
    VImage
  }
}
</script>
