const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
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
    ],
  },
}