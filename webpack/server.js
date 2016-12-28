var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var webpackDevConfig = require('./webpack.dev.conf')
var config = require('./config')

webpackDevConfig.entry.unshift(
  "webpack/hot/dev-server",
  "webpack-dev-server/client?http://localhost:" + config.port
)

var compiler = webpack(webpackDevConfig)
var server = new webpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  inline: true,
  progress: true,
  contentBase: '/src',
  stats: { colors: true }
})

server.listen(config.port, "localhost", function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(' 🌎 Listening at http://localhost:' + config.port + '...')
})
