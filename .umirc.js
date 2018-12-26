const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

export default {
  base: '/jsx2css',
  publicPath: '/jsx2css',
  outputPath: './site',
  chainWebpack(config, { webpack }) {
    config.plugin('moncaco').use(new MonacoWebpackPlugin());
  },
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: false,
    }],
    ['umi-plugin-gh-pages'],
  ]
}
