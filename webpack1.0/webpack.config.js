const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const loader = require('sass-loader');

module.exports = {
    mode:'development',
    devServer: {
        contentBase: path.resolve(__dirname,'build'),
        compress: true,
        publicPath: "build",
        writeToDisk:true
    },
    entry: './src/js/app.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build'),
    },
    module:{
        rules:[
            {
                test: /\.scss$/i,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader:'sass-loader'},
                ],
            },
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'bundle.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ]
}