<template>
  <div id="hoister">
    <Hero height="768px">
      <div style="width: 892px">
        <h1
          class="is-size-3"
          style="margin-bottom: 16px; margin-top: 64px"
        >
          滚筒型托盘专用型
        </h1>
        <p class="is-size-5">
          本设备采用独立变频控制技术，使运输途中的加速和减速非常流畅，
          不需担心货物散落、倾倒的问题。同时，由于产品框架设计为立式塔形，具有较强的抗震能力，在新老建筑均可安装。
        </p>

        <div style="height: 128px"></div>

        <div
          v-for="(titleGroup, groupKey) in drumTypeSubTitles" :key="groupKey"
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
      <VImage style="margin-top: 16px" path="hoister-hero-1.gif"></VImage>
    </Hero>

    <Hero color="white-bis" height="768px">
      <div style="width: 892px">
        <h1
          class="is-size-3"
          style="margin-bottom: 16px; margin-top: 64px"
        >
          滚筒型托盘专用型
        </h1>
        <p class="is-size-5">
          本设备采用独立变频控制技术，使运输途中的加速和减速非常流畅，
          不需担心货物散落、倾倒的问题。同时，由于产品框架设计为立式塔形，具有较强的抗震能力，在新老建筑均可安装。
        </p>

        <div style="height: 96px"></div>

        <div
          v-for="(titleGroup, groupKey) in drumTypeSubTitles" :key="groupKey"
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
      <VImage path="hoister-hero-1.gif"></VImage>
    </Hero>

    <!-- <Hero>
      <div>
        <h2 class="title is-3 has-text-black" style="margin-bottom: 2.5rem">
          ERP/WMS软件系统
        </h2>
        <p class="subtitle is-5 has-text-black">
          WMS软件系统，是一款仓储管理软件产品，
          旨在通过入库业务、出库业务、仓库调拨、库存调拨等功能，
          综合实现批次管理、物料对应、库存盘点、质检管理等功能的管理系统，
          它能有效控制并跟踪仓库业务的物流和成本管理全过程，实现完善的企业仓储信息管理。
          该软件既可以独立执行库存管理，也可与ERP、TMS等系统结合使用，可提供完整全面的企业业务流程和管理信息。
        </p>
        <a class="button is-link is-right">详细介绍 →</a>
      </div>
      <div class="is-flex-auto" style="min-width: 3rem"></div>
    </Hero> -->
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import VImage from '@/components/Image'

export default {
  name: 'Hostier',
  components: {
    Hero,
    VImage,
    // VideoButton
  },
  data () {
    return {
      PLTypeSubTitles,
      drumTypeSubTitles
    }
  }
}

const drumTypeSubTitles = [
  [
    ['自主检验即可', '该机器是作为非载人电梯类以外机械设备得以认定的，每年4次自主点检即可，从而削减了运行成本。'],
    ['加速减速流畅', '采用独立变频控制，加速和减速非常流畅，不必担心货物散落、倾倒问题。']
  ],
  [
    ['独立塔式框架结构', '产品采用立式塔型框架，具有较强抗震能力，设备在新老建筑内均可设置。'],
    ['安全装置万无一失', '采用了完善的安全装置，体现了为客户提供“安心”运行保证的设计理念。']
  ]
]

const PLTypeSubTitles = [
  [
    ['可降低运行成本', '一般电梯需要每年法定点检12次，但本机每年仅需4次主点检即可，能够大幅降低运行成本'],
    ['无需建筑确认申请', '采用本机时，无需办理所需电梯建筑确认申请手续']
  ],
  [
    ['作业效率高', '装载口有专用托盘处于待机状态, 可以灵活进行搬入、搬出作业。并且，专用托盘全自动运行，可确保作业安全'],
    ['能够同时实施搬运作业', '动力叉车及手动叉车可同时使用，能够同时实施搬运作业，无需进行物流车改造']
  ]
]
</script>
