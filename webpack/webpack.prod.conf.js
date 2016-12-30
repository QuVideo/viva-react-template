var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExctractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.conf')
var config = require('./config')

var extractCSS = new ExctractTextPlugin('css/[name].[contenthash].css')

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /(\.css|\.less)$/,
      loader: extractCSS.extract([
        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'less'
      ]),
      exclude: /node_modules/
    }, {
      test: /(\.css|\.less)$/,
      loader: extractCSS.extract(['css', 'less']),
      include: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 30000,
        name: 'img/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }]
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
    extractCSS,
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
