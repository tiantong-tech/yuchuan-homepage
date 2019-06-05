<template>
  <div class="app-level-container">
    <div class="container">
      <nav class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
          <Logo></Logo>
        </div>
        <!-- Right side -->
        <div class="level-right">
          <router-link
            tag="p"
            class="level-item"
            v-for="(subTitle, key) in subTitles" :key="key"
            :to="subTitle.route"
          >
            <a>{{subTitle.text}}</a>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'Level',
  components: {
    Logo
  },
  data () {
    return {
      subTitles: [
        { text: '首页', route: '/' },
        // { text: '产品中心', route: '/products' },
        { text: '提升机', route: '/hoisters' },
        { text: '客户服务', route: '/service' },
        // { text: '新闻案例', route: '/news' },
        { text: '关于我们', route: '/about' },
        { text: '联系我们', route: '/prices/hoister' }
      ]
    }
  }
}
</script>
