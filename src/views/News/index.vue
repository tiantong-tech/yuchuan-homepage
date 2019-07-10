<template>
  <div id="products">
    <div class="container is-flex" style="padding-top: 2rem">
      <nav class="panel" style="width: 200px">
        <a
          v-for="(title, key) in titles" :key="key"
          :class="!key && 'is-active'"
          class="panel-block"
        >
          {{title}}
        </a>
      </nav>
      <div style="width: 32px"></div>
      <div
        class="is-flex-auto"
        style="justify-content: center"
      >
        <NewsItem
          v-for="item in items" :key="item.id"
          :news="item"
        >
        </NewsItem>
      </div>
    </div>
    <Pagination
      v-bind="meta"
      @change="handleChange"
    ></Pagination>
    <div style="height: 2rem"></div>
  </div>
</template>

<script>
import axios from '@/providers/axios'
import dataSource from '@/mixins/dataSource'
import NewsItem from './Item'
import Pagination from '@/components/Pagination'

export default {
  name: 'News',
  mixins: [ dataSource ],
  components: {
    NewsItem,
    Pagination
  },
  data () {
    return {
      titles: ['全部新闻']
    }
  },
  methods: {
    handleChange (page) {
      this.changePage(page)
      window.scrollTo(0, 0)
    }
  },
  created () {
    this.initialize({
      url: '/news/exhibit'
    })
  }
}
</script>
