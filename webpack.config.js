var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'main-compiled.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};