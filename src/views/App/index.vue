<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="app-body"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="sass" src="@/assets/sass/index.sass"></style>
