// 优化：
// 1.dllPlugin 打包第三方库 分包策略； 一般开发环境时使用  和splitChunk一起使用时 会有冲突
// 2.splitChunk 代码分割； 正式，上线，生产环境时使用
// 3. cdn
const path = require('path')
module.exports = { // 打包第三方库 dllPlugin 动态链接库
    mode: 'development',
    entry: './src/util/library.js',
    output: {
        filename: 'util.dll.js',
        library: 'a', // var a = ()()
        libraryTarget: 'commonjs2', // commonjs 一个一个导出 module.exports.a = xxx ；commonjs2 默认全部导出 module.exports = xxx
        path: path.resolve(__dirname, 'dll')
    }
}