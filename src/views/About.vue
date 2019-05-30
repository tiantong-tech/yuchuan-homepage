<template>
  <div
    id="about"
    class="container"
    style="padding: 4rem 0 4rem; width: 600px"
  >
    <div style="margin-bottom: 2rem">
      <h1
        class="has-text-centered is-size-3"
        style="margin-bottom: 1rem"
      >
        公司介绍
      </h1>
      <h2 class="is-size-5">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          玉串是一家以自动化物流设备集成为依托，
          集物流装备研发、系统规划、设计、加工制造、安装调试、客户培训、
          售后服务于一体的一站式物流输送系统集成企业。
          公司积累了丰富的行业经验与客户资源，充分集成了产业链上游的优质设备供应商资源并建立了长期 合作关系；
          本公司致力于帮助客户全面提高生产资材供给、成品垂直或水平输送的自动化水平，在设备选型、供应商筛选等方面与客户开展公开透明的合作，提高客户服务品质，最终实现客户的生产物流、仓储物流的流程自动化、信息可视化的水平。
        </p>
        <p>
          我们以真诚、责任为合作前提，携手客户分析物流流程中的课题，
          与客户共同制定自动化物流系统解决方案，并用3D演示方式直观、
          科学的展示系统投入运行的实际效果，从而降低系统投入成本，规避投资风险。
        </p>
      </h2>
    </div>

    <div style="margin-bottom: 2rem">
      <h1
        class="has-text-centered is-size-3"
        style="margin-bottom: 1rem"
      >
        公司团队
      </h1>
      <h2 class="is-size-5">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          上海玉串自动化科技有限公司总部位于上海，
          在珠海、大连均设有分公司，由海外归国行业技术精英组建而成。
          企业命名为玉串，暗喻企业成员玉不雕不成器，
          铁不炼不成钢的团队凝聚力以及企业与供应商、
          客户之间如玉串一样精诚合作密不可分的合作精神。
        </p>
        <p>
          我们以真诚、责任为合作前提，携手客户分析物流流程中的课题，
          与客户共同制定自动化物流系统解决方案，并用3D演示方式直观、
          科学的展示系统投入运行的实际效果，从而降低系统投入成本，规避投资风险。
        </p>
      </h2>
    </div>

    <div class="has-text-centered" style="margin-bottom: 2rem">
      <h1
        class="is-size-3"
        style="margin-bottom: 1rem"
      >
        企业理念
      </h1>
      <h2 class="is-size-5">
        <p>以全体员工幸福为企业发展原动力；</p>
        <p>以服务客户，达成客户满意为企业发展目标；</p>
        <p>以与上下游供应商携手共进，共同发展为企业发展方向；</p>
        <p>以创造企业财富回报社会为企业愿景；</p>
        <p>以全员参与为企业管理方针；</p>
        <p>以公平公正为企业经营准则；</p>
      </h2>
    </div>

    <div class="has-text-centered">
      <h1
        class="is-size-3"
        style="margin-bottom: 2rem"
      >
        联系我们
      </h1>
      <div class="company has-background-white-ter">
        <h1
          class="is-size-4"
          style="margin-bottom: 1rem"
        >
          上海总部
        </h1>
        <p>地址：上海市奉贤区解放东路1018弄1619室</p>
        <p>电话：+86-21-6105 7311</p>
        <p>邮件：Wang@als-yuchuan.com</p>
        <p>网站：www.als-yuchuan.com</p>
      </div>
      <div class="company has-background-white-ter">
        <h1
          class="is-size-4"
          style="margin-bottom: 1rem"
        >
          珠海分公司
        </h1>
        <p>地址：广东省珠海市斗门区白藤七路德昌盛景</p>
        <p>电话：+86-185 7826 8613</p>
        <p>邮件：michellezhang@als-yuchuan.com</p>
        <p>网站：www.als-yuchuan.com</p>
      </div>
      <div class="company has-background-white-ter">
        <h1
          class="is-size-4"
          style="margin-bottom: 1rem"
        >
          大连分公司
        </h1>
        <p>地址：辽宁省大连市经济开发区万达广场7号楼 2217室</p>
        <p>电话：+86-411-8870 8679</p>
        <p>邮件：michellezhang@als-yuchuan.com</p>
        <p>网站：www.als-yuchuan.com</p>
      </div>
    </div>
  </div>
</template>

<script>
// import Hero from '@/components/Hero'
// import VImage from '@/components/Image'

export default {
  name: 'About',
  components: {
    // Hero,
    // VImage
  }
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
    &:not(:last-child)
      margin-bottom: 2rem
</style>
