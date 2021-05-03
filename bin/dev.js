const esbuild = require('esbuild');
const path = require('path');

const { root, buildPath, clear } = require('./common');
// 清空 build 目录
clear();

// esbuild 打包
esbuild.buildSync({
    entryPoints: [path.join(root, 'lib/index.ts')],
    bundle: true,
    sourcemap: true,
    watch: true, // 监听文件变化
    target: ['chrome70'],
    outfile: path.join(buildPath, '/index.js')
})