const esbuild = require('esbuild');
const path = require('path');
const { root, buildPath, clear } = require('./common');

// 清空 build 目录
clear();

// esbuild 打包
esbuild.buildSync({
    entryPoints: [path.join(root, 'lib/index.ts')],
    bundle: true, // 对所有依赖都打包
    minify: true, // 压缩包
    // sourcemap: true,
    platform: 'browser',
    target: ['chrome70'],
    outfile: path.join(buildPath, '/index.js')
})

// @TODO
// 生成 zip 文件
// zip 中包含 icons,images文件夹, manifest.json文件, build/index.js文件
// nodejs原生没有 zip 相关接口, zip包需用npm下载, 下载 zip 包 node_modules膨胀
// 暂时不实现 zip 功能, 考虑思路是用 golang 实现, 打包成三个二进制包放于 bin 目录
// 在运行时用 nodejs 判断当前平台,调用对应的二进制包执行.