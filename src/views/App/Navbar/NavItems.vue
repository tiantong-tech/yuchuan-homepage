<template>
  <div class="is-flex is-hidden-touch">
    <template v-for="(menu, key) in menus">
      <router-link
        tag="div"
        v-if="!menu.children"
        :key="key"
        :to="menu.route"
        class="nav-item"
      >
        <a>{{menu.text}}</a>
      </router-link>
      <NavDropdown
        v-else :key="key"
        :text="menu.text"
        :menus="menu.children"
      ></NavDropdown>
    </template>
  </div>
</template>

<script>
import NavDropdown from './NavDropdown'

export default {
  name: 'NavItem',
  components: {
    NavDropdown
  },
  props: {
    menus: {}
  }
}
</script>
