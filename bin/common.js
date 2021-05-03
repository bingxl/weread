const fs = require('fs');
const path = require('path')
const buildPath = path.join(__dirname, '..', 'build');
const root = path.join(__dirname, '../');

// 清空 build 目录
function clear() {
    fs.rmSync(buildPath, { force: true, recursive: true });
    fs.mkdirSync(buildPath, { recursive: true });
}

module.exports = {
    buildPath,
    root,
    clear,
}