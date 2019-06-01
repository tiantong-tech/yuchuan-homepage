const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: config => {
    const plugins = []
    process.env.NODE_ENV === 'production' && plugins.push(
      new PrerenderSPAPlugin({
        staticDir: path.resolve(__dirname, './dist'),
        routes: [
          '/',
          '/news',
          '/about',
          '/service',
          '/hoisters'
        ]
      })
    )

    return {
      plugins
    }
  }
}
