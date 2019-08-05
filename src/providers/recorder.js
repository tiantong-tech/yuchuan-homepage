/**
 * recorder
 * 1. 从 storage 中读取 device_key
 * 2. 读取失败则申请 device_key
 * 3. 使用 device_key 执行 record
 * 4. 如果发生 401，则移除本地 key，重新执行 2
 */

import Axios from 'axios'
import storage from 'store'
import router from './router'

export default {
  install () {
    router.afterEach(async to => {
      handle(to.path)
    })
  }
}

const state = {
  key: '',
  errors: 0
}

const axios = Axios.create()

axios.interceptors.request.use(config => {
  config.headers.Authorization = state.key

  return config
})

function isSpider () {
  return ['Baiduspider', 'Googlebot'].some(str => {
    navigator.userAgent.includes()
  })
}

async function handle (resource) {
  if (isSpider()) return

  await handleLoadDeviceKey()
  record(resource)
    .catch(() => {
      if (!state.error) {
        state.error = true
        storage.remove('device_key')
        handle(resource)
      }
    })
}

async function record (resource = '/no_resource', type = 'page') {
  axios.defaults.headers['Authorization'] = state.key

  axios.post('/yuchuan/access/record', { resource , type })
    .catch(() => {
      if (state.errors >= 1) return
      state.errors++
      storage.remove('device_key')
      handleLoadDeviceKey()
        .then(() => record(resource))
    })
}

async function handleLoadDeviceKey () {
  let key = storage.get('device_key')
  if (!key) {
    const response = await axios.post('/devices/create')
    key = response.data.key
    storage.set('device_key', key)
  }

  return state.key = key
}
