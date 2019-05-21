<template>
  <div id="app">
    <Level></Level>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Level from '@/components/Level'

export default {
  name: 'App',
  components: {
    Level
  }
}
</script>

<style lang="sass" src="@/assets/sass/index.sass"></style>
