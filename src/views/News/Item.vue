<template>
  <div
    class="news-item"
    @click="$router.push(`/news/${news.id}`)"
  >
    <h1
      class="is-size-4"
      style="margin-bottom: 0.5rem"
    >
      {{title}}
    </h1>
    <p>
      {{article}}
    </p>

    <div style="height: 1rem"></div>

    <div class="is-flex">
      <div class="is-flex-auto"></div>
      <TimeWrapper
        :value="news.created_at"
        class="tag is-info"
        style="border-radius: 0"
      >
      </TimeWrapper>
    </div>
  </div>
</template>

<script>
import TimeWrapper from '@/components/wrappers/Time'

export default {
  name: 'NewsItem',
  components: {
    TimeWrapper
  },
  props: {
    news: {}
  },
  computed: {
    title () {
      const text = this.news.title.slice(0, 30)

      return text.length < 30 ? text : text + '......'
    },
    article () {
      const text = new DOMParser()
        .parseFromString(this.news.article, 'text/html')
        .body.innerText.slice(0, 100)

      return text.length < 100 ? text : text + '......'
    }
  }
}
</script>
