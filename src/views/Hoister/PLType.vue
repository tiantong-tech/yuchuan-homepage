<template>
  <div>
    <Hero height="768px">
      <div style="width: 860px">
        <h1
          class="is-size-3"
          style="margin-bottom: 16px"
        >
          PL 专用托盘/物流车循环型
        </h1>
        <p class="is-size-5">
          低成本专用托盘循环系统
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
      <VImage style="margin-top: 16px" path="hoisters/pltype/animation.gif"></VImage>
    </Hero>
    <div
      class="container is-flex is-flex-column"
      style="justify-content: center; align-items: center; margin-bottom: 80px; margin-top: 80px"
    >
      <h2 class="is-size-3" style="margin-bottom: 16px">主要装置</h2>
      <VImage path="hoisters/pltype/structure.jpg"></VImage>
    </div>
    <div
      class="container is-flex is-flex-column"
      style="justify-content: center; align-items: center; margin-bottom: 80px; margin-top: 80px"
    >
      <h2 class="is-size-3" style="margin-bottom: 32px">使用案例</h2>
      <div>
        <VImage
          path="hoisters/pltype/case-1.jpg"
          style="width: 480px; height: 400px; margin-right: 32px;"
        ></VImage>
        <VImage
          path="hoisters/pltype/case-2.jpg"
          style="width: 480px; height: 400px"
        ></VImage>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import VImage from '@/components/Image'

export default {
  name: 'PLTypeHoister',
  components: {
    Hero,
    VImage
  },
  data: () => ({
    subTitles: [
      [
        ['可降低运行成本', '一般电梯需要每年法定点检12次，但本机每年仅需4次主点检即可，能够大幅降低运行成本'],
        ['无需建筑确认申请', '采用本机时，无需办理所需电梯建筑确认申请手续']
      ],
      [
        ['作业效率高', '装载口有专用托盘处于待机状态, 可以灵活进行搬入、搬出作业。并且，专用托盘全自动运行，可确保作业安全'],
        ['能够同时实施搬运作业', '动力叉车及手动叉车可同时使用，能够同时实施搬运作业，无需进行物流车改造']
      ]
    ]
  })
}
</script>
