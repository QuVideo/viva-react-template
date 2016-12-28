var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var ora = require('ora')

var shell = require('shelljs')
shell.env.NODE_ENV = 'production'

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

shell.rm('-rf', 'build')
shell.mkdir('-p', 'build')

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
