<template>
  <a
    class="level-item level-dropdown"
    :class="isMenuMatched && 'is-active'"
    @mouseenter.self="isHovered = true"
    @mouseleave.self="isHovered = false"
  >
    <span>产品中心</span>
    <div
      class="dropdown-menu"
      :class="isHovered && 'is-active'"
    >
      <div
        class="dropdown-content"
        style="width: 200px"
      >
        <div @click="handleItemClick">
        <router-link
          tag="p"
          class="dropdown-item"
          to="/products/hoisters"
        >垂直物流输送系统</router-link>
        <router-link
          tag="p"
          class="dropdown-item"
          to="/products/rgv"
        >有轨穿梭车</router-link>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'LevelProductItems',
  data: () => ({
    isHovered: false
  }),
  computed: {
    isMenuMatched () {
      return this.$route.fullPath.substr(0, 10) === '/products/' && 'is-active'
    }
  },
  methods: {
    handleItemClick () {
      this.isHovered = false
    }
  }
}
</script>
