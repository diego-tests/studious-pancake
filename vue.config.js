
const StyleLintPlugin = require('stylelint-webpack-plugin')
const styleLintConfig = new StyleLintPlugin({
  files: ['./src/**/*.{css,scss,vue}'],
  quiet: false,
  failOnError: false,
  fix: true,
})

const plugins = [
  styleLintConfig,
]

module.exports = {
  configureWebpack: {
    plugins,
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        return { ...options, fix: true, failOnError: true }
      })

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
  
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }, 
}
