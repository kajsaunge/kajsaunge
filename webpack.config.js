var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + "/build/"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.jade$/,
                exclude: /node_modules/,
                loader: 'jade-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/build'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'hejsansvejsan',
            template: './src/templates/index.jade'
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: false,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            LOCALE: JSON.stringify('en')
          })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
