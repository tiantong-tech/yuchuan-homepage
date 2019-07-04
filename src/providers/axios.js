import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL_BASE

function beforeRequest (config) {
  return config
}

function beforeResponse (response) {
  return response
}

function beforeError (error) {
  console.log({ error })

  throw error
}

axios.interceptors.request.use(
  beforeRequest
)

axios.interceptors.response.use(
  beforeResponse,
  beforeError
)

export default axios
