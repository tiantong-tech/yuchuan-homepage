<template>
  <div id="app-index">
    <Hero
      color="white"
      height="744px"
      image="home/hero-1.jpg"
    >
      <div style="width: 560px">
        <h1 class="is-size-2 has-text-white" style="margin-bottom: 1rem">
          智能物流专家
        </h1>
        <p class="is-size-4 has-text-white">
          智能物流是利用集成智能化技术，使物流系统能模仿人类的智能，
          具有思维、感知、学习、推理判断和自行解决物流中某些问题的能力
        </p>
        <!-- <p style="margin-top: 1rem">
          <VideoButton></VideoButton>
        </p> -->
      </div>
    </Hero>
    <Hero color="white-ter">
      <div
        class="is-flex-auto"
        style="margin-right: 3rem"
      >
        <h2 class="is-size-3" style="margin-bottom: 1rem">
          垂直物流输送系统
        </h2>
        <p class="is-size-5">
          垂直物流输送是在指多层建筑结构中，用各种输送设备进行作业，
          信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备。
        </p>
        <div @click="handleJump" style="margin-top: 1rem; width: 100px">
          <router-link to="/products/hoisters" class="is-size-5">
            了解更多 >
          </router-link>
        </div>
      </div>
      <figure class="image">
        <VImage
          style="width: 512px; height: 392px"
          path="home/hoister-1.jpg"
        ></VImage>
      </figure>
    </Hero>
    <Hero color="white">
      <div
        class="is-flex-auto"
        style="margin-right: 3rem"
      >
        <h2 class="is-size-3" style="margin-bottom: 1rem">
          物流设备
        </h2>
        <p class="is-size-5">
          自动化物流设备是在无人干预的情况下，根据已经设定的指令或者程序，
          自动完成工作流程的任务，在各行业的生产制造、物流运输都起着重要作用。
        </p>
        <div @click="handleJump" style="margin-top: 1rem; width: 100px">
          <router-link to="/products/rgv" class="is-size-5">
            物流设备 >
          </router-link>
        </div>
      </div>
      <figure class="image">
        <VImage
          style="width: 512px; height: 392px"
          path="home/device-1.png"
        ></VImage>
      </figure>
    </Hero>
    <Hero color="white-ter">
      <div
        class="is-flex-auto"
        style="margin-right: 3rem"
      >
        <h2 class="is-size-3" style="margin-bottom: 1rem">
          自动化立体仓库系统
        </h2>
        <p class="is-size-5">
          自动化立体仓库是采用高层货架配以料箱或托盘储存货物，
          用巷道堆垛起重机及其他输送设备在信息WMS以及设备控制WCS的支配下进行联动作业，
          以实现仓储物流合理化，存取自动化，操作简便化的自动化物流仓储系统。
        </p>
      </div>
      <figure class="image">
        <VImage
          style="width: 512px; height: 392px"
          path="home/liku-1.png"
        ></VImage>
      </figure>
    </Hero>
    <div
      class="is-flex"
      style="justify-content: center; margin-top: 48px; margin-bottom: 12px"
    >
      <h2 class="is-size-3">
        WMS & WCS软件系统
      </h2>
    </div>
    <div
      class="container is-flex"
      style="justify-content: center; align-items: center"
    >
      <VImage path="home/software-1.png"></VImage>
    </div>
    <div style="height: 32px"></div>
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
  },
  methods: {
    handleJump () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
