/*
 * @Description: 
 * @Date: 2020-12-11 15:34:09
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

// 清理产出目录的插件
 const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//  产出 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    // 输出目录
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js' ],
    alias: {
      '@': path.resolve('src')
    },
  },
  devServer: {
    contentBase: '../dist',
    proxy: [　　
      // webpack 关于跨域的配置 https://www.cnblogs.com/zwhbk/p/13364931.html　　　　
  　　// 例如将'localhost: 8080/api/xxx'代理到'http:www.baidu.com/api/xxx
      {
          context: ['/api'],
          target: 'http://localhost:4000/',//接口域名
          changeOrigin: true, //如果是https需要配置该参数
          secure: false, //如果接口跨域需要进行该配置
      },
　　　// 例如将'localhost: 8080/img/xxx'代理到'http:www.baidu.com/xxx
      {
          context: ['/img'],
          target: 'http:www.baidu.com',//接口域名
          changeOrigin: true, //如果是https需要配置该参数
          secure: false, //如果接口跨域需要进行该配置
          pathRewrite: {//是指服务器把接口中api去掉，以免img这几个字母加入到接口地址中
              '^/img': ''
          }
      },
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  stats: { children: false }
}