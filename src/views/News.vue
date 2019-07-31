<template>
  <div id="products">
    <div class="container is-flex" style="padding-top: 2rem">
      <!-- <nav class="panel" style="width: 200px">
        <a
          v-for="(title, key) in titles" :key="key"
          class="panel-block"
          v-active="!key"
        >
          {{title}}
        </a>
      </nav> -->
      <div style="width: 32px"></div>
      <div class="is-flex-auto" style="justify-content: center">
        <div class="has-background-white-ter" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
        <div class="has-background-primary" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
        <div class="has-background-info" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
        <div class="has-background-link" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
        <div class="has-background-warning" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
        <div class="has-background-danger" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
        <div class="has-background-dark" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
        <div class="has-background-black" style="width: 100%; height: 240px; margin-bottom: 32px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      titles: ['全部新闻', '自动化立体仓库', '物流设备', 'ERP/WMS 软件系统']
    }
  }
}
</script>
