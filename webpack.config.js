// 代码分割3种方式
// 1. entry配置： 通过多个entry文件来实现
// 2. 动态加载（按需加载）：通过主动使用import()来动态加载
// 3. 抽取公共代码： 使用splitChunk配置来抽取公共代码
    // 条件： 被共享的或来自node_modules或大于30K的
// 模块， 代码块 chunk
// webpack 基于 node 是用node 写的
// 每个入口 打包成一个chunk(代码块)
// 编译
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        chunkFilename: "[name].videos.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/css.css'
        }),
        new PurgecssWebpackPlugin({
            paths: glob.sync(`public/**/*`, {
                nodir: true // 不匹配目录
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { // .babelrc 
                        presets: ['@babel/preset-env'], // xian
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options:  {
                        hmr: true
                    }
                },
                // 'style-loader', 
                {
                    loader: 'css-loader',
                    options: { // 解决css 里面引入sass的解析问题，当匹配到sass时再次调用sass-loader
                        importLoaders: 2
                    }
                }, 'postcss-loader', 'sass-loader']
            }
        ]
    },
    externals: { // cdn 外部 资源
        'jquery': '$'
    },
    optimization: { // 优化 webpack5
        splitChunks: {
            cacheGroups: {
                vendors: { // 第三方
                    chunks: 'initial',  // 指定分割类型 all async initial(同步)：默认
                    name: 'vendors' // 名字
                },
                commons: { // 第三方
                    chunks: 'initial',  // 指定分割类型 all async initial(同步)：默认
                    name: 'commons' // 名字
                }
            }
        }
    }
}