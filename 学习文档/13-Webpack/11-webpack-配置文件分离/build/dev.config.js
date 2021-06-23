
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig =require('./base.config')
module.exports =webpackMerge(baseConfig,{
  plugins: [
    // js 代码丑化
    new uglifyJsPlugin(),
  ],
})
