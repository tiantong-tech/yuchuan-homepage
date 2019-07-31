<template>
  <div
    v-active="isNavMatched"
    class="nav-item nav-dropdown"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <a>{{text}}</a>
    <div
      v-active="isHovered"
      class="dropdown-menu"
    >
      <div
        class="dropdown-content"
        style="width: 200px"
        @click="isHovered = false"
      >
        <router-link
          v-for="(menu, key) in menus"
          :key="key" tag="p"
          class="dropdown-item"
          :to="menu.route"
        >{{menu.text}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavItemDropdown',
  props: {
    text: {},
    menus: {}
  },
  data: () => ({
    isHovered: false
  }),
  computed: {
    isNavMatched () {
      return this.menus.some(
        menu => this.$route.fullPath.includes(menu.route)
      )
    }
  },
}
</script>
