<template>
  <div
    class="container news-article"
    style="max-width: 700px"
  >
    <h1>{{news.title}}</h1>
    <div v-html="news.article"></div>
  </div>
</template>

<script>
import axios from '@/providers/axios'

export default {
  name: 'NewsDetail',
  props: {
    id: {}
  },
  data: () => ({
    isLoading: false,
    news: {}
  }),
  created () {
    window.scrollTo(0, 0)
    this.isLoading = true
    axios.post('/news/find', {
      id: this.id
    })
    .then(response => {
      this.news = response.data
    })
    .finally(() => {
      this.isLoading = false
    })
  }
}
</script>
