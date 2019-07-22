<template>
  <aside class="menu">
    <ul class="menu-list">
      <li v-for="(menu, key) in menus" :key="key">
        <router-link
          v-if="!menu.children"
          :to="menu.route"
          @click.native="handleClick"
        >
          {{menu.text}}
        </router-link>
        <a v-else>{{menu.text}}</a>
        <ul v-if="menu.children">
          <li v-for="(submenu, key) in menu.children" :key="key">
            <router-link
              :to="submenu.route"
              @click.native="handleClick"
            >
              {{submenu.text}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    menus: {}
  },
  methods: {
    handleClick () {
      this.$emit('click-item')
    }
  }
}
</script>
