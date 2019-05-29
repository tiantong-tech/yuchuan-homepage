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
          path="hoisters/sigma/animation.gif"
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
      <VImage path="hoisters/sigma/structure.jpg"></VImage>
    </div>
    <div
      class="container is-flex is-flex-column"
      style="align-items: center"
    >
      <h2
        class="is-size-3"
        style="margin: 3rem 0 3rem"
      >使用案例</h2>
      <div>
        <VImage
          style="width: 600px; height: 400px; margin-right: 3rem;"
          path="hoisters/sigma/case-1.jpg"
        ></VImage>
        <VImage
          style="width: 600px; height: 400px"
          path="hoisters/sigma/case-2.jpg"
        ></VImage>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'SigmaType',
  components: {
    VImage
  },
  data: () => ({
    title: '随机专用托盘循环型垂直输送系统',
    subTitle: `
      本机力求节省搬入·搬出口空间，该系统的设计基于在狭窄仓库内，在难以保证充足作业空间时发挥重要作用，
      同时兼具『PL专用托盘循环型』的优点。
    `,
    features: [
      [
        ['节省空间型', '搬入、搬出口所需空间与标准型相比降低约40%。'],
        ['能够降低运行成本', '一般电梯需要每年法定点检12～24次，但本机平均仅需每年4次自主点检即可，能够大幅降低运行成本。']
      ],
      [
        ['无需相关建筑安全确认申请', '在采用本机时，无需类似于电梯的建筑安全确认申请手续。']
      ]
    ]
  })
}
</script>
