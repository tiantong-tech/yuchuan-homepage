<template>
  <div id="hoister">
    <Hero height="744px">
      <div style="width: 640px">
        <h1 class="title is-2" style="margin-bottom: 2.5rem">
          滚筒型提升机
        </h1>
        <p class="subtitle is-4">
          本设备采用独立变频控制技术，使运输途中的加速和减速非常流畅，
          不需担心货物散落、倾倒的问题。同时，由于产品框架设计为立式塔形，具有较强的抗震能力，在新老建筑均可安装。
        </p>
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
  name: 'HomeIndex',
  components: {
    Hero,
    VImage,
    // VideoButton
  }
}
</script>
