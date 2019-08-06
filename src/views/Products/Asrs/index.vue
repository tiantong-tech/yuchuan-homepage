<template>
  <div id="rgv">
    <div class="container">
    <div class="is-hidden-tablet" style="height: 1rem"></div>
    <div class="is-hidden-mobile" style="height: 3rem"></div>
      <div class="columns is-vcentered">
        <div class="column">
          <h1
            class="is-size-3"
            style="margin-bottom: 1rem"
          >
            自动化立体仓库
          </h1>
          <h2>
            自动化立体仓库是充分利用空间，
            实现货物的最大存储量、存储的高度自动化、存储的高速化和信息的一体化，
            完全由计算机操控的自动化物流存储系统仓库(AS/RS系统)
            通常是由立体货架、有轨巷道堆垛机、出入库托盘输送机系统、
            尺寸检测条码阅读系统及计算机操作系统组成的复杂自动化集成化物流理念，
            采用先进的控制、总线、通讯和信息技术，通过以上设备的协调动作进行出入库作业。
          </h2>
        </div>
        <div style="width: 2rem"></div>
        <div
          id="asrs-hero"
          class="column is-narrow"
          style="margin-top: 1rem"
        >
          <figure class="image">
            <VImage path="home/liku-1.jpg"></VImage>
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
            path="asrs/case-1.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="asrs/case-3.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="asrs/case-2.jpeg"
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
        ['高利用率', '通过使用高层货架存储的方式，大幅提高空间利用率。'],
        ['高生产率', '加快货物的存取节奏，减轻劳动强度，提高生产效率']
      ],
      [
        ['系统兼容', '与其他物流系统对接，提高企业整体信息化水平'],
        ['智能控制', '控制库存和管理更加灵活，无须人员介入即可快速操作']
      ]
    ]
  })
}
</script>
