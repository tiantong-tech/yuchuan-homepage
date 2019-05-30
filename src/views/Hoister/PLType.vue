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
          path="hoisters/pltype/animation.gif"
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
      <VImage path="hoisters/pltype/structure.jpg"></VImage>
    </div>
    <div
      class="container is-flex is-flex-column"
      style="align-items: center; padding-top: 2rem"
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
          path="hoisters/pltype/case-1.jpg"
        ></VImage>
        <VImage
          class="column"
          style="width: 600px; height: 400px"
          path="hoisters/pltype/case-2.jpg"
        ></VImage>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'PLTypeHoister',
  components: {
    VImage
  },
  data: () => ({
    title: 'PL 专用托盘/物流车循环型',
    subTitle: '低成本专用托盘循环系统',
    features: [
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
