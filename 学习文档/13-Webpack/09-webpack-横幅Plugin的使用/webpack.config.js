
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  plugins:[
      new webpack.BannerPlugin('最终版权归K.makise所有'),
      new HtmlWebpackPlugin({
        template:'index.html'
      }),
      new uglifyJsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责css文件的加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时，是从右向左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit的时候，会将图片编译成base64字符串形式
              // 当加载的图片大于limit的时候，需要使用file-loader进行加载
              limit: 13000,
              name:'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        // exclude:排除
        // include:包括
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        //
        test:/\.vue$/,
        use:['vue-loader']
      }
    ],
  },
  resolve:{
    // 省略指定扩展名
    extensions:['.js','.css','.vue'],
    // alias:别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
}