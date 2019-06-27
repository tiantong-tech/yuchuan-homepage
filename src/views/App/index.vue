<template>
  <div id="app">
    <Level></Level>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Level from './Level'
import Footer from './Footer'

export default {
  name: 'App',
  components: {
    Level,
    Footer
  }
}
</script>

<style lang="sass" src="@/assets/sass/index.sass"></style>
