<template>
  <div>
    <div
      class="container"
      style="padding-top: 1rem"
    >
      <div
        class="columns is-vcentered"
        style="height: 480px; margin-bottom: 3rem"
      >
        <div class="column">
          <h1
            class="is-size-3"
            style="margin-bottom: 1rem"
          >
            有轨穿梭车
          </h1>
          <h2 class="is-size-5">
            穿梭车是一种智能机器人，可以编程实现取货、运送、放置等任务，
            并可与上位机或WMS系统进行通讯，结合RFID、条码等识别技术，实现自动化识别、存取等功能。
          </h2>
        </div>
        <div class="column">
          <VImage
            path="rgv/hero.jpg"
          ></VImage>
        </div>
      </div>
    </div>
    <div style="height: 5rem"></div>
    <div class="container columns">
      <div class="column">
        <h1
          class="is-size-5"
          style="margin-bottom: 1rem"
        >
          <span class="feature-title">高能力&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </h1>
        <h2 class="is-size-6">
          拥有世界最高走行速度
          <span class="has-text-danger">200</span>
          (满载)/
          <span class="has-text-danger">250</span>
          m/min(空载) 。
        </h2>
        <h2 class="is-size-6">
          通过变频控制实现了平稳的加速 和减速。
        </h2>
      </div>
      <div class="column">
        <h1
          class="is-size-5"
          style="margin-bottom: 1rem"
        >
          <span class="feature-title">便于维修</span>
        </h1>
        <h2 class="is-size-6">
          启动原点多处分布，一旦停电 等发生时可迅速恢复正常运转。
        </h2>
        <h2 class="is-size-6">
          采用高性能遥控器，便于维护和操作。
        </h2>
      </div>
    </div>
    <div class="container columns">
      <div class="column">
        <h1
          class="is-size-5"
          style="margin-bottom: 1rem"
        >
          <span class="feature-title">节约能源</span>
        </h1>
        <h2 class="is-size-6">
          采用高强度树脂车轮，降低了走行 阻力。
        </h2>
        <h2 class="is-size-6">
          直穿式台车采用
          <span class="has-text-danger">电源逆变器</span>
          ，达到能源再生利用。
        </h2>
      </div>
      <div class="column">
        <h1
          class="is-size-5"
          style="margin-bottom: 1rem"
        >
          <span class="feature-title">节省空间</span>
        </h1>
        <h2 class="is-size-6">
          最小转弯弧度可达到Ｒ500mm,提高了空间有效利用率。
        </h2>
      </div>
    </div>
    <div style="height: 5rem"></div>
    <div class="container">
      <div class="columns">
        <div class="column" style="width: 100%">
          <VImage
            path="rgv/case-1.png"
          ></VImage>
        </div>
        <div class="column">
          <VImage path="rgv/case-2.png"></VImage>
        </div>
        <div class="column">
          <VImage path="rgv/case-3.png"></VImage>
        </div>
      </div>
    </div>
    <div style="height: 8rem"></div>
  </div>
</template>

<script>
import VImage from '@/components/Image'

export default {
  name: 'RGV',
  components: {
    VImage
  }
}
</script>
