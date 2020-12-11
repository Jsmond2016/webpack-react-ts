const { smart } = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = smart(base, {
  mode: 'production',
})