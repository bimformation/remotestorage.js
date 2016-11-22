var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');

// minimize only in production
var plugins = isProd ? [new webpack.optimize.UglifyJsPlugin({minimize: true})] : []

module.exports = {
  entry: ['./src/remotestorage.js'],
  // source map not in production
  devtool: isProd ? 'source-map' : '',
  output: {
    filename: __dirname + '/release/' + (isProd?'stable':'head') + '/remotestorage.js',
    library: 'RemoteStorage',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [ 'xmlhttprequest' ],
  plugins: plugins
};