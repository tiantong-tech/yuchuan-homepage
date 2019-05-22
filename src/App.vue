<template>
  <div id="app">
    <Level></Level>
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
