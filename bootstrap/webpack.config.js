const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        contentBase: path.resolve(__dirname,'demo'),
        compress: true,
        publicPath: "demo",
        writeToDisk:true
    },
    entry: './src/js/app.js',
    output:{
        filename: './js/build.js',
        path: path.resolve(__dirname,'demo'),
    },
    module:{
        rules:[
            {
                test: /\.scss$/i,
                use:[
                    // {loader: 'style-loader'},
                    {loader: MiniCssExtractPlugin.loader,},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins: function(){
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            },  
                        }
                    },
                    {loader: 'sass-loader'},   
                ]
            },
            {
                test:/\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath:'./fonts/',
                            publicPath:'./fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: './css/blundle.css'
        }),
        // new webpack.ProvidePlugin({
        //     $:'jquery',
        //     jQuery: 'jquery'
        // }),
        new HtmlWebpackPlugin({
            template: './src/demo/index.html',
            filename: 'index.html',
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/demo/forms.html',
        //     filename: 'forms.html',
        // }),
    ]
}