<template>
  <div>
    <Hero height="768px">
      <div style="width: 860px">
        <h1
          class="is-size-3"
          style="margin-bottom: 16px"
        >
          滚筒型托盘专用型
        </h1>
        <p class="is-size-5">
          本设备采用独立变频控制技术，使运输途中的加速和减速非常流畅，
          不需担心货物散落、倾倒的问题。同时，由于产品框架设计为立式塔形，具有较强的抗震能力，在新老建筑均可安装。
        </p>
        <div style="height: 128px"></div>
        <div
          v-for="(titleGroup, groupKey) in subTitles" :key="groupKey"
          style="margin-bottom: 48px"
          class="is-flex"
        >
          <div
            class="hoister-subtitle"
            style="margin-bottom: 16px"
            v-for="(title, titleKey) in titleGroup" :key="titleKey"
          >
            <div
              class="has-background-info"
              style="width: 64px; height: 4px; margin-bottom: 12px"
            ></div>
            <p class="is-size-5" style="margin-bottom: 12px">{{title[0]}}</p>
            <p class="is-size-6">{{title[1]}}</p>
          </div>
        </div>
      </div>
      <div class="is-flex-auto"></div>
      <VImage style="margin-top: 16px" path="hoisters/drum/animation.gif"></VImage>
    </Hero>
    <div
      class="container is-flex is-flex-column"
      style="justify-content: center; align-items: center; margin-bottom: 80px; margin-top: 80px"
    >
      <h2 class="is-size-3" style="margin-bottom: 16px">主要装置</h2>
      <VImage path="hoisters/drum/structure.jpg"></VImage>
    </div>
    <div
      class="container is-flex is-flex-column"
      style="justify-content: center; align-items: center; margin-bottom: 80px; margin-top: 80px"
    >
      <h2 class="is-size-3" style="margin-bottom: 32px">使用案例</h2>
      <div>
        <VImage style="width: 480px; height: 400px; margin-right: 32px;" path="hoisters/drum/case-1.jpeg"></VImage>
        <VImage style="width: 480px; height: 400px" path="hoisters/drum/case-2.jpg"></VImage>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import VImage from '@/components/Image'

export default {
  name: 'DrumpTypeHoister',
  components: {
    Hero,
    VImage
  },
  data: () => ({
    subTitles: [
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
