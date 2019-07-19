<template>
  <div class="app-nav-container">
    <div class="container is-flex is-vcentered">
      <Logo></Logo>
      <div class="is-flex-auto"></div>
      <NavItems :menus="menus"></NavItems>
      <div
        class="nav-item is-hidden-desktop"
        style="margin-top: 0.5rem"
      >
        <a
          class="nav-menu icon is-medium"
          :class="isMenuActive && 'is-active'"
          @click="isMenuActive = !isMenuActive"
        >
          <i class="iconfont icon-menu"></i>
        </a>
      </div>
    </div>
    <div
      v-show="isMenuActive"
      class="nav-menu is-hidden-desktop is-unselectable"
    >
      <div class="menu-shadow"></div>
      <NavMenu
        :menus="menus"
        @click-item="isMenuActive = false"
      ></NavMenu>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import NavMenu from './NavMenu'
import NavItems from './NavItems'

export default {
  name: 'Level',
  components: {
    Logo,
    NavMenu,
    NavItems
  },
  data: () => ({
    isMenuActive: false,
    menus: [
      { text: '首页', route: '/' },
      {
        text: '产品介绍', children: [
          { text: '垂直物流输送系统', route: '/products/hoisters' },
          { text: '有轨穿梭车', route: '/products/rgv' },
        ]
      },
      { text: '客户服务', route: '/service' },
      { text: '公司介绍', route: '/about' },
      { text: '联系我们', route: '/prices/hoister' }
    ],
    subTitles: [
      { text: '首页', route: '/' },
      // { text: '产品中心', route: '/products' },
      { text: '提升机', route: '/hoisters' },
      { text: '客户服务', route: '/service' },
      // { text: '新闻案例', route: '/news' },
      { text: '公司介绍', route: '/about' },
      { text: '联系我们', route: '/prices/hoister' }
    ]
  })
}
</script>
