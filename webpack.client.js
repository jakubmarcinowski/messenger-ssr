const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

  // Root file of app
  entry: './src/client/client.js',

  // Tell webpack whete to put the output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },


  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    }, ]
  },
};

module.exports = merge(baseConfig, config);
