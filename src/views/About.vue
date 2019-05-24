<template>
  <div id="about">
    <Hero image="about-hero-2.jpeg" style="height: 420px"></Hero>
    <div style="height: 60px"></div>
    <div>
      <div class="container is-flex" style="height: 240px; align-items: center; justify-content: center">
        <div class="is-flex-auto">
          <h1 class="title is-4">
            公司介绍
          </h1>
          <h2 class="content">
            <p>
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
      </div>
    </div>

    <div class="container is-flex" style="height: 320px; align-items: center">
      <div class="is-flex-auto">
        <h1 class="title is-4">
          公司团队
        </h1>
        <h2 class="content">
          <p>
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
      <div style="min-width: 4rem"></div>
      <VImage style="width: 192px; height: 192px" path="about-team.jpg"></VImage>
    </div>

    <div class="container is-flex" style="height: 400px; align-items: center">
      <div>
        <h1 class="title is-4">
          企业理念
        </h1>
        <h2 class="content">
          <p>以全体员工幸福为企业发展原动力；</p>
          <p>以服务客户，达成客户满意为企业发展目标；</p>
          <p>以与上下游供应商携手共进，共同发展为企业发展方向；</p>
          <p>以创造企业财富回报社会为企业愿景；</p>
          <p>以全员参与为企业管理方针；</p>
          <p>以公平公正为企业经营准则；</p>
        </h2>
      </div>
      <div style="min-width: 2rem"></div>
      <VImage class="is-flex-auto" style="height: 320px;" path="about-brief-1.jpeg"></VImage>
    </div>
    <div style="height: 40px"></div>

    <!-- <div
      class="container is-flex is-flex-column"
      style="padding-top: 3rem; padding-bottom: 5rem; align-items: center"
    >
      <h1 class="title is-3">加入我们</h1>
      <div class="is-flex" style="flex-wrap: wrap; justify-content: center">
        <div
          class="card" style="margin: 1rem; max-width: 440px"
          v-for="key in 2" :key="key"
        >
          <header class="card-header is-flex">
            <p class="card-header-title is-flex" style="justify-content: center">
              销售工程师
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>职位描述：</p>
              <p>
                负责公司产品的销售及推广，负责销售区域内销售活动的策划和执行，完成销售任务；
                管理维护客户关系以及客户间的长期战略合作计划。
              </p>
              <div style="height: 0.5rem"></div>
              <p>职位要求</p>
              <ol style="margin-left: 1rem">
                <li>机电一体化专业及相关专业，精通AutoCAD等相关技术软件和办公软件</li>
                <li>性格开朗，反应敏捷、表达能力强，具有较强的沟通能力及交际技巧</li>
                <li>具备一定的市场分析及判断能力，良好的客户服务意识</li>
                <li>有责任心，能承受较大的工作压力，有强烈的创业梦想</li>
                <li>精通英语、日语优先</li>
              </ol>
            </div>
          </div>
          <footer class="card-footer">
            <span class="card-footer-item">地点：上海、大连</span>
            <span class="card-footer-item">人数：5人</span>
          </footer>
        </div>
        <div
          class="card" style="margin: 1rem; max-width: 400px"
          v-for="key in 3" :key="key"
        >
          <header class="card-header is-flex">
            <p class="card-header-title is-flex" style="justify-content: center">
              销售工程师
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>职位描述：</p>
              <p>
                负责公司产品的销售及推广，负责销售区域内销售活动的策划和执行，完成销售任务；
                管理维护客户关系以及客户间的长期战略合作计划。
              </p>
              <div style="height: 0.5rem"></div>
              <p>职位要求</p>
              <ol style="margin-left: 1rem">
                <li>机电一体化专业及相关专业，精通AutoCAD等相关技术软件和办公软件</li>
                <li>性格开朗，反应敏捷、表达能力强，具有较强的沟通能力及交际技巧</li>
                <li>具备一定的市场分析及判断能力，良好的客户服务意识</li>
                <li>有责任心，能承受较大的工作压力，有强烈的创业梦想</li>
                <li>精通英语、日语优先</li>
              </ol>
            </div>
          </div>
          <footer class="card-footer">
            <span class="card-footer-item">地点：上海、大连</span>
            <span class="card-footer-item">人数：5人</span>
          </footer>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import VImage from '@/components/Image'

export default {
  name: 'About',
  components: {
    Hero,
    VImage
  }
}
</script>
