<template>
  <div class="video-button">
    <a
      class="button is-link"
      @click="isShow = true"
    >
      <span>{{text}}</span>
      <span class="icon" style="width: 2.5rem">
        <i class="iconfont icon-video" style="font-size: 1rem"></i>
      </span>
    </a>
    <div class="modal" v-active="isShow">
      <div
        @click="handleClose"
        class="modal-background"
      ></div>
      <div class="modal-content">
        <video
          v-if="isShow || isCaching"
          id="yuchuan-introduce"
          class="video-js vjs-default-skin vjs-big-play-centered"
          style="border-bottom: none"
          autoplay="muted"
          preload="auto"
          controls
          ref="video"
        >
          <slot></slot>
        </video>
      </div>
    </div>
  </div>
</template>

<script>
let timeout = null

export default {
  name: 'VideoButton',
  props: {
    text: {
      default: '观看视频'
    },
    // 缓存时间，单位 s
    cacheTime: {
      default: 15
    }
  },
  data: () => ({
    isShow: false,
    isCaching: false
  }),
  methods: {
    handleOpen () {
      this.isShow = true
    },
    handleClose () {
      // 处理未结束的缓存
      if (this.isCaching) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(
        () => this.isCaching = false,
        this.cacheTime * 1000
      )

      this.isCaching = true
      this.isShow = false
      this.$refs.video.pause()
    }
  }
}
</script>
