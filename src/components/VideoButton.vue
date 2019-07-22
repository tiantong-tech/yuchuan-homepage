<template>
  <div>
    <a
      class="button is-link"
      @click="isShow = true"
    >
      <span>{{text}}</span>
      <span class="icon" style="width: 2.5rem">
        <i class="iconfont icon-video" style="font-size: 1rem"></i>
      </span>
    </a>
    <div
      class="modal"
      :class="isShow && 'is-active'"
    >
      <div
        @click="isShow = false"
        class="modal-background"
      ></div>
      <div class="modal-content">
        <video
          id="yuchuan-introduce"
          class="video-js vjs-default-skin vjs-big-play-centered"
          autoplay="muted"
          preload="auto"
          controls
        >
          <slot></slot>
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoButton',
  props: {
    text: {
      default: '播放视频'
    }
  },
  data: () => ({
    isShow: false,
    options: {

    }
  })
}
</script>
