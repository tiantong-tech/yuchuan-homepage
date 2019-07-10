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
            tag="p" class="level-item" to="/"
            active-class="none"
            exact-active-class="router-link-active"
          >
            <a>首页</a>
          </router-link>
          <ProductItems></ProductItems>
          <router-link tag="p" class="level-item" to="/service">
            <a>客户服务</a>
          </router-link>
          <router-link tag="p" class="level-item" to="/news">
            <a>新闻案例</a>
          </router-link>
          <router-link tag="p" class="level-item" to="/about">
            <a>关于我们</a>
          </router-link>
          <router-link tag="p" class="level-item" to="/prices/hoister">
            <a>联系我们</a>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import ProductItems from './ProductItems'

export default {
  name: 'Level',
  components: {
    Logo,
    ProductItems
  },
  data () {
    return {
      subTitles: [
        { text: '首页', route: '/' },
        // { text: '产品中心', route: '/products' },
        { text: '提升机', route: '/hoisters' },
        { text: '客户服务', route: '/service' },
        // { text: '新闻案例', route: '/news' },
        { text: '公司介绍', route: '/about' },
        { text: '联系我们', route: '/prices/hoister' }
      ]
    }
  }
}
</script>
