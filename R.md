- mini-css-extract-plugin 抽离css 到link
- css 添加前缀
   - postcss-loader 需配置 postcss.config.js 文件
   - autoprefixer 自动添加前缀
- 预处理器
    1. sass-loader / node-sass
    2. less-loader / less
    3. stylus-loader / stylus
- css-loader 可以转化里面引入的图片等
- style-loader 添加style标签插入页面
- purgecss-webpack-plugin 清除无用的css 需配合 glob包 使用
- 函数定义的时候就会产生 作用域
- 函数执行的时候产生 执行上下文