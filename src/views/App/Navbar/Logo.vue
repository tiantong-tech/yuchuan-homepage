<template>
  <router-link
    to="/" tag="div"
    class="nav-logo"
  >
    <VImage
      path="common/logo.png"
      class="app-logo-image"
      style="width: 96px; height: 44px; margin-bottom: 2px"
    ></VImage>
    <span>
      上海玉串自动化科技有限公司
    </span>
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
