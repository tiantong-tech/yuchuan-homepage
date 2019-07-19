<template>
  <div
    class="nav-item nav-dropdown"
    :class="isNavMatched && 'is-active'"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <a>{{text}}</a>
    <div
      class="dropdown-menu"
      :class="isHovered && 'is-active'"
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
        menu => menu.route === this.$route.fullPath
      )
    }
  },
}
</script>
