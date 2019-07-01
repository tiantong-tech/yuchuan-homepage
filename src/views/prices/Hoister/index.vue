<template>
  <div id="hoister-price">
    <router-view></router-view>
    <div style="height: 2rem"></div>
    <div class="container">
      <HoisterParams ref="hoister"></HoisterParams>
      <h2>留言</h2>
      <section style="max-width: 500px">
        <textarea
          v-model="params.message"
          cols="20" rows="5" class="textarea"
        ></textarea>
      </section>

      <section class="is-flex" style="width: 500px">
        <div class="is-flex-auto" style="width: 200px">
          <h2 class="is-subtitle">联系电话</h2>
          <input
            v-model="params.phone_number"
            type="text" class="input"
          >
        </div>
        <span style="width: 1rem"></span>
        <div style="width: 200px">
          <h2 class="is-subtitle">姓名</h2>
          <input
            v-model="params.name"
            type="text" class="input"
          >
        </div>
      </section>

      <section class="is-flex" style="width: 500px">
        <div class="is-flex-auto" style="width: 200px">
          <h2 class="is-subtitle">公司</h2>
          <input
            v-model="params.company"
            type="text" class="input"
          >
        </div>
        <span style="width: 1rem"></span>
        <div style="width: 200px">
          <h2 class="is-subtitle">项目名称</h2>
          <input
            v-model="params.project_name"
            type="text" class="input"
          >
        </div>
      </section>
      <a
        @click="handleSubmit"
        class="button is-link"
        :class="isLoading && 'is-loading'"
        style="width: 120px"
      >提交</a>
    </div>
  </div>
</template>

<script>
import axios from '@/providers/axios'
import HoisterParams from '@/share/product-params/Hoister/index.vue'

const getData = () => ({
  params: {
    type: '垂直输送机设计图基本参数表',
    name: '',
    message: '',
    company: '',
    project_name: '',
    phone_number: ''
  },
  isLoading: false
})

export default {
  name: 'HoisterPrice',
  data: getData,
  components: {
    HoisterParams
  },
  methods: {
    handleSubmit () {
      const params = {
        ...this.params,
        data: this.$refs.hoister.$data
      }
      const handleThen = response => {
        window.scrollTo(0, 0)
        this.$refs.hoister.reset()
        Object.assign(this.$data, getData())
        this.$router.push('/prices/hoister/created')
      }
      const handleCatch = () => {

      }
      const handleFinally = () => {
        this.isLoading = false
      }

      this.isLoading = true
      axios.post('sale/tracks/create', params)
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)
    }
  }
}
</script>
