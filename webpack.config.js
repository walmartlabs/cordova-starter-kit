'use strict';

var webpack = require('webpack');

module.exports = {
  cache: false,
  debug: false,
  devtool: 'source-map',
  entry: {
    bundle: './www/js/index.js'
  },
  output: {
    path: './www/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    'cordova': 'cordova'
  },
  resolve: {
    root: [__dirname],
    modulesDirectories: ['node_modules'],
    extensions: ['','.js']
  }
};