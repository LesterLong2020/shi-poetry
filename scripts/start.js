"use strict";

/**
 * Created by Lester on 2021/1/31
 */

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// 当Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件
process.on('unhandledRejection', err => {
    throw err;
});

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require("../config/webpack.config")('development');
const IP = require("../config/get.ip");

const PORT = parseInt(process.env.PORT, 10) || 8000;
const HOST = process.env.IP === 'true' ? IP : (process.env.HOST || 'localhost');
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';

const compiler = webpack({
    ...webpackConfig,
    target: "web"
});
const devServerOptions = {
    ...webpackConfig.devServer,
    https: process.env.HTTPS === 'true',
    historyApiFallback: true
};

const server = new webpackDevServer(compiler, devServerOptions);

server.listen(PORT, HOST, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Starting sever on ${protocol}://${HOST}:${PORT}`)
});
