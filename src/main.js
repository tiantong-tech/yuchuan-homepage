import Vue from 'vue'
import App from './App.vue'
import router from './router'
import components from './boot/components'
import axios from '@/providers/axios'

axios.get('/api')
  .then(response => console.log(response.data))

Vue.config.productionTip = false

Vue.use(components)

new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
