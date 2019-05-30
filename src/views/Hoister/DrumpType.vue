<template>
  <div style="padding: 0 0 3rem">
    <div class="container columns">
      <div
        class="column is-flex is-flex-column"
        style="width: 600px; margin-right: 3rem; justify-content: center"
      >
        <h1
          class="is-size-3"
          style="margin-bottom: 1rem"
        >
          {{title}}
        </h1>
        <p class="is-size-5">
          {{subTitle}}
        </p>
        <div style="height: 96px"></div>
        <div
          v-for="(feagureGroup, groupKey) in features" :key="groupKey"
          style="margin-bottom: 48px"
          class="is-flex"
        >
          <div
            class="hoister-subtitle"
            style="margin-bottom: 16px"
            v-for="(feature, featureKey) in feagureGroup"
            :key="featureKey"
          >
            <div
              class="has-background-info"
              style="width: 64px; height: 4px; margin-bottom: 12px"
            ></div>
            <p class="is-size-5" style="margin-bottom: 12px">{{feature[0]}}</p>
            <p class="is-size-6">{{feature[1]}}</p>
          </div>
        </div>
      </div>
      <figure class="column image is-narrow">
        <VImage
          path="hoisters/drum/animation.gif"
          style="width: 350px; height: 680px"
        ></VImage>
      </figure>
    </div>
    <div
      class="container is-flex is-flex-column"
      style="align-items: center"
    >
      <h2
        class="is-size-3"
        style="margin-bottom: 3rem"
      >主要装置</h2>
      <VImage path="hoisters/drum/structure.jpg"></VImage>
    </div>
    <div
      class="container is-flex is-flex-column"
      style="align-items: center"
    >
      <h2
        class="is-size-3"
        style="margin-bottom: 2rem"
      >
        使用案例
      </h2>
      <div class="columns">
        <VImage
          class="column"
          style="width: 600px; height: 400px;"
          path="hoisters/drum/case-1.jpeg"
        ></VImage>
        <VImage
          class="column"
          style="width: 600px; height: 400px"
          path="hoisters/drum/case-2.jpg"
        ></VImage>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'DrumpTypeHoister',
  components: {
    VImage
  },
  data: () => ({
    title: '滚筒型托盘专用型',
    subTitle: `
      本设备采用独立变频控制技术，使运输途中的加速和减速非常流畅，
      不需担心货物散落、倾倒的问题。同时，由于产品框架设计为立式塔形，具有较强的抗震能力，在新老建筑均可安装。
    `,
    features: [
      [
        ['自主检验即可', '该机器是作为非载人电梯类以外机械设备得以认定的，每年4次自主点检即可，从而削减了运行成本。'],
        ['加速减速流畅', '采用独立变频控制，加速和减速非常流畅，不必担心货物散落、倾倒问题。']
      ],
      [
        ['独立塔式框架结构', '产品采用立式塔型框架，具有较强抗震能力，设备在新老建筑内均可设置。'],
        ['安全装置万无一失', '采用了完善的安全装置，体现了为客户提供“安心”运行保证的设计理念。']
      ]
    ]
  })
}
</script>
