import Vue from 'vue'
import App from './views/App/index.vue'
import router from '@/providers/router'
import components from './boot/components'
import axios from '@/providers/axios'
import recorder from '@/providers/recorder'
import directives from './providers/directives'

Vue.config.productionTip = (
  process.env.NODE_ENV === 'production'
)

Vue.use(recorder)
Vue.use(components)
Vue.use(directives)

axios.get('/api')
  .then(response => console.log(response.data.message))

new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
