var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExctractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.conf')
var config = require('./config')

module.exports = merge(baseWebpackConfig, {
  module: {
  },
  devtool: config.sourceMap ? '#source-map' : false,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExctractTextPlugin('css/[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
})
