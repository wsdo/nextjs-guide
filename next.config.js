const withCSS = require('@zeit/next-css')
const dev = process.env.NODE_ENV != 'production'
const localIdentName = dev ? '[local]-[hash:base64:5]' : '[hash:base64:5]'
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]-[hash:base64:5]'
  }
})