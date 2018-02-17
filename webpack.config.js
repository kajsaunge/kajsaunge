var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
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
                    use: ['css-loader?url=false', 'sass-loader'],
                    publicPath: './css'
                })
            },
            {
                test: /\.(jpe?g|svg|png|gif)$/i,
                exclude: /node_modules/,
                use: 'file-loader?name=[name].[ext]&outputPath=img/'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'kajsaunge',
            template: './src/templates/index.jade' 
        }),
        new ExtractTextPlugin({
            filename: 'css/main.css',
            disable: false,
            allChunks: true,
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
