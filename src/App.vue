<template>
  <div id="app">
    <Level></Level>
    <!-- 路由包装，解决 SPA 页面未加载就直接显示页脚的问题 -->
    <div style="min-height: calc(100vh - 7rem)">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Level from '@/components/Level'
import Footer from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    Level,
    Footer
  }
}
</script>

<style lang="sass" src="@/assets/sass/index.sass"></style>
