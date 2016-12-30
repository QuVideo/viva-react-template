var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
}
