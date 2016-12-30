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
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /(\.css|\.less)$/,
      loader: 'style'
              + '!css-loader'
              + '?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
              + '!less',
      exclude: /node_modules/
    }, {
      test: /(\.css|\.less)$/,
      loader: 'style!css-loader!less',
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
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
}
