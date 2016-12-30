var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlwebPackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')
var config = require('./config')

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /(\.css|\.less)$/,
      loader: 'style'
              + '!css'
              + '?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
              + '!less',
      exclude: /node_modules/
    }, {
      test: /(\.css|\.less)$/,
      loader: 'style!css!less',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:' + config.port }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlwebPackPlugin({
      template: 'index.html',
      inject: true
    }),
    new DashboardPlugin()
  ]
})
