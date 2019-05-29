<template>
  <div id="service">
    <div
      class="container columns"
      style="align-items: center; padding: 4rem 0 4rem"
    >
      <div class="column">
        <h1 class="is-size-3">
          全天候全身心 极致售后服务
        </h1>
        <div style="height: 2rem"></div>
        <h2 class="is-size-4">
          创世界一流的服务和关怀
        </h2>
        <div style="height: 0.5rem"></div>
        <p>
          面对超过数万用户的真诚信赖，实践“客户至上，诚信为本”的 服务理念，
          为客户提供“主动式关怀”，将“蓝色关爱”服务品 牌化，系统化、标准化，
          为客户提供售前、售中、售后一站式整 体服务解决方案。
        </p>
        <div style="height: 2rem"></div>
        <h2
          class="is-size-4"
          style="margin-bottom: 0.5rem"
        >
          “蓝色关爱”服务万里行
        </h2>
        <p>
          我们不惧风雨日夜兼程，始终坚持热忱知心 用过硬的服务团队、
          携现金的服务设备 周全满足您对快乐、可靠的售后服务需求
        </p>
      </div>
      <figure class="image column">
        <VImage
          path="service/frame.png"
          style="min-width: 360px; height: 392px"
        ></VImage>
      </figure>
    </div>
    <section class="has-background-white-ter">
      <div
        class="container"
        style="padding-top: 4rem; padding-bottom: 4rem"
      >
        <h1
          class="is-size-2 has-text-centered"
          style="margin-bottom: 1rem"
        >服务流程</h1>
        <figure class="image">
          <VImage path="service/processes.jpg"></VImage>
        </figure>
      </div>
    </section>
    <section
      class="container columns"
      style="padding-top: 3rem; padding-bottom: 3rem"
    >
      <div
        class="column is-flex is-flex-column"
        style="justify-content: center; margin-right: 3rem"
      >
        <h1
          class="is-size-2"
          style="margin-bottom: 1rem"
        >
          解决方案
        </h1>
        <h2
          class="is-size-4"
          style="margin-bottom: 1rem"
        >
          我们提供快速有力的解决方案
        </h2>
        <p>
          各类企业虽然在长期发展历程中已经积累了丰富的实践经验，
          但由于信息反馈不及时、不精确、不全面等问题导致了大量浪费与运作成本的居高不下。
          智慧物流解决方案可以通过各种自动化设备和ERP/WMS/WCS等帮助企业实现数据交换、
          信息共享、承载货物仓储、物流信息平台等多种应用，提升管理水平，降低企业运营成本，提高综合竞争力。
        </p>
      </div>
      <figure class="image column">
        <VImage
          path="service/solution.png"
          style="width: 737px; height: 324px"
        ></VImage>
      </figure>
    </section>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'Service',
  components: {
    VImage
  }
}
</script>
