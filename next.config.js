const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]-[hash:base64:5]'
  }
})
