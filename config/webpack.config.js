/**
 * Created by Lester on 2020/12/19
 */

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function (env) {
    const isDev = env === 'development';

    return {
        entry: {
            main: path.resolve(__dirname, '../src/index.tsx'),
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'js/[name][hash:5].bundle.js',
            publicPath: './'
        },
        mode: env,
        devServer: {
            hot: true,
            inline: true,
            compress: true,
            open: true,
            publicPath: '/',
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                    pathRewrite: { '^/api': '' },
                    changeOrigin: true
                }
            }
        },
        watchOptions: {
            poll: 1000,
            aggregateTimeout: 500,
            ignored: /node_modules/
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            alias: {
                '@': path.resolve(__dirname, '../src'),
                'src': path.resolve(__dirname, '../src'),
            }
        },
        performance: {
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        },
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            }, {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: '/node_modules/',
            }, {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader']
            }, {
                test: /\.(png|svg|jpe?g)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 8192,
                        name: 'assets/images/[name].[ext]'
                    }
                }]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            }, {
                test: /\.htm?l$/,
                loader: 'html-withimg-loader'
            }, {
                test: /\.less$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        modules: {
                            localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
                        },
                    },
                }, 'less-loader']
            }]
        },
        plugins: [
            isDev && new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css'
            }),
            new CopyWebpackPlugin({
                patterns: [{
                    from: 'static/*',
                    to: '../dist/'
                }]
            }),
        ].filter(Boolean)
    }
};
