# weread
微信读书浏览器插件

# 安装
1. 从扩展商店安装: [edge扩展商店](https://microsoftedge.microsoft.com/addons/detail/weread/cdmomalodmfcplbngkaakopcnbnciami?hl=en-US), chrome暂未上线
2. 从源码安装
    * [下载源码](https://github.com/bingxl/weread)
    * 安装依赖(只有一个 esbuild 依赖) 控制台切换到源码根目录执行命令`npm install`
    * 构建. 源码根目录执行命令 `npm run build`
    * 进入浏览器扩展界面(edge是 edge://extensions, chrome 是 chrome://extensioins), 打开开发者模式,点击load unpacked,选择源码根目录.

# 使用
[进入微信读书网页端](https://weread.qq.com), 登录后进入我的书架页面会多出一个搜索框, 在此搜索框中输入书名以搜索书架中的书籍
![搜索框](./images/search-button.png)

# 功能
1. - [x] 在书架中搜索书籍
2. - [ ] 使用 `golang` 实现 `zip` 归档. 
# 已上线
[edge浏览器](https://microsoftedge.microsoft.com/addons/detail/weread/cdmomalodmfcplbngkaakopcnbnciami?hl=en-US)

# 添加功能
在 lib 目录下新建一个 ts 文件, 此文件中实现具体的功能, 最后导出一个[pluginType对象](./global.d.ts), 在 [`lib/index.ts`](./lib/index.ts) 文件中导入ts文件, 并将其添加到 `plugins`数组中

# 相关命令
- 构建 `npm run build`, 该命令执行 `bin/build.js` 文件, 将  `lib/index.ts` 打包到 `build/index.js`
- 开发 `npm run start`, 该命令执行 `bin/dev.js` 文件, 除了构建外还监听文件变化.

# info
[esbuild](https://esbuild.github.io/getting-started/) 真是一个眼前一亮的构建工具, 构建速度快,本人最欣赏的是 `esbuild` 安装后在 `node_modules` 中只有一个包, 而其它构建工具已安装就是一堆包.