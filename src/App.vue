<template>
  <div id="app">
    <Level></Level>
    <router-view />
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
