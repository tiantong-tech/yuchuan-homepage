<template>
  <div id="about">
    <section class="container">
      <div class="is-hidden-touch" style="height: 6rem"></div>
      <div class="is-hidden-desktop" style="height: 0.75rem"></div>
      <div class="columns is-vcentered">
        <figure class="image column">
          <VImage
            path="about/company.jpg"
            style="min-width: 360px; height: 392px"
          ></VImage>
        </figure>
        <div style="width: 32px"></div>
        <div class="column">
          <h1 class="is-size-3">
            公司介绍
          </h1>
          <div style="height: 1rem"></div>
          <h2 class="is-size-5">
            上海玉串总部在上海，是由海外归国行业技术精英组建而成，是一家以自动化物流设备集成为依托，
            集物流装备研发、系统规划、设计、加工制造、安装调试、客户培训、售后服务于一体的一站式物流输送系统集成的企业。
            本公司致力于帮助客户全面提高生产资材供给、成品垂直/水平输送之自动化水平，
            最终实现客户的生产物流、仓储物流的流程自动化、信息可视化的水平。
          </h2>
        </div>
      </div>
    </section>
    <div class="is-hidden-touch" style="height: 4rem"></div>
    <div class="is-hidden-desktop" style="height: 0.75rem"></div>
    <!-- <div
      style="width: 100%; padding: 3rem 0 3rem"
    >
      <div class="container">
        <h1
          class="is-size-3"
          style="margin-bottom: 1rem"
        >
        </h1>
        <p class="is-size-5">

        </p>
        <div style="height: 1rem"></div>
        <p class="is-size-5">
          我们以真诚、责任为合作前提，携手客户分析物流流程中的课题，
          与客户共同制定自动化物流系统解决方案，并用3D演示方式直观、
          科学的展示系统投入运行的实际效果，从而降低系统投入成本，规避投资风险。
        </p>
      </div>
    </div> -->
    <div style="padding: 3rem 0 0">
      <div class="container">
        <h1
          class="is-size-3 has-text-centered"
          style="margin-bottom: 4rem"
        >
          企业理念
        </h1>
        <div
          v-for="(group, key) in briefs" :key="key"
          class="columns"
          style="margin-bottom: 5rem"
        >
          <div
            v-for="(item, key) in group" :key="key"
            class="column has-text-centered"
          >
            <span class="icon is-large">
              <i
                :class="'iconfont icon-' + item.icon"
              ></i>
            </span>
            <div style="height: 1rem"></div>
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="company has-background-white-ter">
      <div style="height: 2rem"></div>
      <h1
        class="is-size-3"
        style="margin-bottom: 2rem"
      >
        公司地址
      </h1>
      <h1 class="is-size-4">
        上海总部
      </h1>
      <p class="is-size-5">电话：+86-21-6105 7311</p>
      <p class="is-size-5">邮件：Wang@als-yuchuan.com</p>
      <p class="is-size-5">网站：www.als-yuchuan.com</p>
      <p class="is-size-5">地址：上海市奉贤区解放东路1018弄1619室</p>
    </div>
    <div class="company has-background-white-ter">
      <h1 class="is-size-4">
        珠海分公司
      </h1>
      <p class="is-size-5">电话：+86-185 7826 8613</p>
      <p class="is-size-5">邮件：michellezhang@als-yuchuan.com</p>
      <p class="is-size-5">网站：www.als-yuchuan.com</p>
      <p class="is-size-5">地址：广东省珠海市斗门区白藤七路德昌盛景</p>
    </div>
    <div class="company has-background-white-ter">
      <h1 class="is-size-4">
        大连分公司
      </h1>
      <p class="is-size-5">电话：+86-411-8870 8679</p>
      <p class="is-size-5">邮件：michellezhang@als-yuchuan.com</p>
      <p class="is-size-5">网站：www.als-yuchuan.com</p>
      <p class="is-size-5">地址：辽宁省大连市经济开发区万达广场7号楼 2217室</p>
      <div style="height: 2rem"></div>
    </div>
  </div>
</template>

<script>
// import Hero from '@/components/Hero'
import VImage from '@/components/Image'

export default {
  name: 'About',
  components: {
    // Hero,
    VImage
  },
  data: () => ({
    briefs: [
      [
        { icon: 'happiness', text: '以全体员工幸福为企业发展原动力' },
        { icon: 'service', text: '以服务客户，达成客户满意为企业发展目标' },
        { icon: 'development', text: '以与上下游供应商携手共进，共同发展为企业发展方向' }
      ],
      [
        { icon: 'sociology', text: '以创造企业财富回报社会为企业愿景' },
        { icon: 'manage', text: '以全员参与为企业管理方针' },
        { icon: 'fair', text: '以公平公正为企业经营准则' }
      ]
    ]
  })
}
</script>

<style lang="sass">
#about
  .company
    flex: 2
    flex-flow: column
    display: flex
    padding: 1rem
    align-items: center
    justify-conteng: center
    h1
      margin-bottom: 0.5rem
</style>
