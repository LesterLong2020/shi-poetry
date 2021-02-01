"use strict";

/**
 * Created by Lester on 2021/1/31
 */

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// 当Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件
process.on('unhandledRejection', err => {
    throw err;
});

const webpack = require('webpack');
const webpackConfig = require("../config/webpack.config")('production');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
    if (err) {
        throw err;
    } else {
        console.log(stats.toJson().assets)
    }
});