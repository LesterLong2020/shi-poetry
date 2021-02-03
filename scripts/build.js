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

const chalk = require('chalk');
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require("../config/webpack.config")('production');

const compiler = webpack(webpackConfig);

const formatSize = size => {
    if (size > 1024 * 1024) {
        return `${(size / (1024 * 1024)).toFixed(1)} MiB`
    }
    if (size > 1024) {
        return `${(size / 1024).toFixed(1)} KiB`
    }
    return `${size} bytes`
};

const spinner = ora('Build...');
spinner.start();

compiler.run((err, stats) => {
    if (err) {
        spinner.fail();
        throw err;
    } else {
        spinner.succeed();
        console.log(chalk.greenBright(stats.toJson().assets.map(item =>
          `${item.name} ${formatSize(item.size)} ${item.isOverSizeLimit ? 'overSizeLimit' : ''} \n`).join('')));
    }
});
