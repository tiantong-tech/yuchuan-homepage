<template>
  <div id="palletizing-robot">
    <div class="container">
    <div class="is-hidden-tablet" style="height: 1rem"></div>
    <div class="is-hidden-mobile" style="height: 3rem"></div>
      <div class="columns is-vcentered">
        <div class="column">
          <h1
            class="is-size-3"
            style="margin-bottom: 1rem"
          >
            码垛机器人
          </h1>
          <h2>
            码垛机器人是在物流生产线末端取代人工或码垛机完成工件的自动码垛功能。
            主要适应对象为大批量、重复性强或是工作环境具有高温、低温、粉尘等条件恶劣的情况。
            具有定位精确、码垛质量稳定、工作节拍可调、运行平稳可靠、维修方便等特点。
          </h2>
        </div>
        <div style="width: 2rem"></div>
        <div
          id="palletizing-robot-hero"
          class="column is-narrow"
          style="margin-top: 1rem"
        >
          <figure class="image">
            <VImage path="palletizing-robot/hero.jpg"></VImage>
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
            path="palletizing-robot/case-1.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="palletizing-robot/case-3.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="palletizing-robot/case-2.png"
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
        ['节省空间', '能够通过编程在狭小的空间内工作，从而节省生产空间'],
        ['低成本', '设备可以连续不间断工作，几乎不需要照明，减少作业成本']
      ],
      [
        ['提高质量', '设备的重复性和精确性能够确保生产出的产品完全符合标准预期'],
        ['安全', '出现意外情况时能够按紧急状态运行或停止，避免安全事故的扩散']
      ]
    ]
  })
}
</script>
