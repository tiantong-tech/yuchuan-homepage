<template>
  <div id="app-index">
    <Hero class="has-background-white-ter" image="index-hero-1.jpg" color="white" height="744px">
      <div style="width: 560px">
        <h1 class="title is-2 has-text-white-ter" style="margin-bottom: 2.5rem">
          智能物流专家
        </h1>
        <p class="subtitle is-4 has-text-white-ter">
          智能物流是利用集成智能化技术，使物流系统能模仿人类的智能，
          具有思维、感知、学习、推理判断和自行解决物流中某些问题的能力
        </p>
      </div>
    </Hero>
    <Hero
      v-for="key in 10" :key="key"
      :class="'has-background-' + (key % 2 ? 'white' : 'white-ter')"
    >
      <div>
        <h1 class="title is-2 has-text-black" style="margin-bottom: 2.5rem">
          ERP/WMS软件系统
        </h1>
        <h2 class="subtitle is-4 has-text-black">
          WMS软件系统，是一款仓储管理软件产品，
          旨在通过入库业务、出库业务、仓库调拨、库存调拨等功能，
          综合实现批次管理、物料对应、库存盘点、质检管理等功能的管理系统，
          它能有效控制并跟踪仓库业务的物流和成本管理全过程，实现完善的企业仓储信息管理。
          该软件既可以独立执行库存管理，也可与ERP、TMS等系统结合使用，可提供完整全面的企业业务流程和管理信息。
        </h2>
        <a class="button is-link is-right">详细介绍 →</a>
      </div>
      <div class="is-flex-auto" style="min-width: 3rem"></div>
      <VImage path="index-wms-pic.png"></VImage>
    </Hero>
    <!-- <Hero image="index-hero-2.png">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2" style="margin-bottom: 2.5rem">
            垂直物流输送系统
          </h1>
          <h2 class="subtitle is-4">
            垂直物流输送是在指多层建筑结构中，用各种输送设备进行作业，
            信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备
          </h2>
          <VideoButton></VideoButton>
        </div>
      </div>
    </Hero> -->
    <!-- <Hero image="index-hero-3.jpg">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2" style="margin-bottom: 2.5rem">
            自动化立体仓库系统
          </h1>
          <h2 class="subtitle is-4">
            自动化立体仓库是采用高层货架配以料箱或托盘储存货物，
            用巷道堆垛起重机及其他输送设备在信息WMS以及设备控制WCS的支配下进行联动作业，
            以实现仓储物流合理化，存取自动化，操作简便化的自动化物流仓储系统
          </h2>
          <VideoButton></VideoButton>
        </div>
      </div>
    </Hero> -->
    <!-- <Hero image="index-hero-2.png">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2" style="margin-bottom: 2.5rem">
            物流设备
          </h1>
          <h2 class="subtitle is-4">
            垂直物流输送是在指多层建筑结构中，用各种输送设备进行作业，
            信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备
          </h2>
          <VideoButton></VideoButton>
        </div>
      </div>
    </Hero> -->
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import VImage from '@/components/Image'
// import VideoButton from '@/components/VideoButton'

export default {
  name: 'HomeIndex',
  components: {
    Hero,
    VImage,
    // VideoButton
  }
}
</script>
