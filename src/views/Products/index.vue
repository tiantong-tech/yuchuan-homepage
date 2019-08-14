<template>
  <div class="has-background-white-ter">
    <div class="container">
      <div style="height: 1.5rem"></div>

      <a class="is-size-4 is-flex is-vcentered">
        <span class="icon is-medium" style="margin-right: 1rem">
          <i class="iconfont icon-menu"></i>
        </span>
        <span>全部产品</span>
      </a>
      <div style="height: 1.5rem"></div>
      <div class="columns" v-for="key in 2" :key="key">
        <div
          class="column"
          v-for="key in 3" :key="key"
        >
          <div style="width: 100%; height: 100%; background: #fff; height: 25rem"></div>
        </div>
      </div>
    </div>

    <div style="height: 2rem"></div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data: () => ({
    types: ['全部产品', '提升机', '堆垛机', 'AGV 搬运车'],
    currentType: '全部产品'
  })
}
</script>
