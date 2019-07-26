import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'

Vue.use(Router)
Router.prototype.isMatched = isMatched

export default new Router({
  mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  linkExactActiveClass: 'is-active',
  routes
})

function isMatched ({ name, params }) {
  const route = this.app.$route
  const isMatched = route.matched.findIndex(
    route => route.name === name
  ) !== -1

  if (!isMatched || !params) {
    return isMatched
  }

  for (let key in params) {
    if (
      getValue(params[key]) !==
      getValue(route.params[key])
    ) {
      return false
    }
  }

  return true
}

function getValue (value) {
  return typeof value === 'number' ? value.toString() : value
}
