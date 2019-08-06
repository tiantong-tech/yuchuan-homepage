<template>
  <div id="rgv">
    <div class="container">
    <div style="height: 1rem"></div>
      <div class="columns is-vcentered">
        <div class="column">
          <h1
            class="is-size-3"
            style="margin-bottom: 1rem"
          >
            AGV 无人搬运车
          </h1>
          <h2>
            AGV（Automated Guided Vehicle）是指装备了电磁或光学引导装置，
            能够按照规定的引导路径行驶，具有小车运行和停车装置、安全保护装置、
            具有各种移载功能的运输小车。
          </h2>
        </div>
        <div style="width: 2rem"></div>
        <div class="column is-narrow">
          <figure class="image">
            <VImage path="agv/hero.png"></VImage>
          </figure>
        </div>
      </div>
    </div>
    <div class="is-hidden-mobile" style="height: 6rem"></div>
    <div class="is-hidden-tablet" style="height: 3rem"></div>
    <div class="container">
      <h1 class="is-size-4 has-text-centered">
        产品特点
      </h1>
      <div style="height: 3rem"></div>
      <div
        class="columns"
        v-for="(group, key) in features" :key="key"
      >
        <div
          class="column"
          v-for="(feature, key) in group" :key="key"
        >
          <div class="feature-top is-hidden-touch"></div>
          <h1 class="feature-title is-size-5">
            {{feature[0]}}
          </h1>
          <div style="height: 0.5rem"></div>
          <p>{{feature[1]}}</p>
        </div>
      </div>
    </div>
    <div class="is-hidden-mobile" style="height: 6rem"></div>
    <div class="is-hidden-tablet" style="height: 3rem"></div>
    <div class="container">
      <div class="is-size-4 has-text-centered">
        使用案例
      </div>
      <div style="height: 3rem"></div>
      <div class="columns">
        <div class="column">
          <VImage
            path="agv/case-1.png"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="agv/case-3.jpeg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="agv/case-2.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
      </div>
    </div>
    <div class="is-hidden-touch" style="height: 5rem"></div>
    <div class="is-hidden-desktop" style="height: 2rem"></div>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'Agv',
  components: {
    VImage
  },
  data: () => ({
    features: [
      [
        ['功能丰富', '支持灵活的出入库策略，适应多样化需求。'],
        ['优化管理', '自动记录设备工作日志，节省人力和设备的管理成本。']
      ],
      [
        ['全功能对接', '支持与商城业务系统 ERP 及外围设备对接。'],
        ['稳定安全', '采用操作系统、IP虚拟化，实现关键数据异地容灾备份，关键进程双机热备。']
      ]
    ]
  })
}
</script>
