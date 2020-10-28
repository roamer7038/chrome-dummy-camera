'use strict'

const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')
const PATHS = require('./paths')

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    cs: PATHS.src + '/cs.js',
    loader: PATHS.src + '/loader.js'
  }
})

module.exports = config
