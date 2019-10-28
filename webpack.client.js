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
    }
};

module.exports = merge(baseConfig, config);