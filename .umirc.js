// ref: https://umijs.org/config/
const path = require('path');
const posview = require('postcss-px-to-viewport');
const posretina = require('postcss-retina-1px');
export default {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    models: path.resolve(__dirname, 'src/models'),
    assets: path.resolve(__dirname, 'src/assets'),
  },
  targets: {
    ie: 11,
  },
  // publicPath: 'http://www.abc.com/',
  treeShaking: true,
  extraPostCSSPlugins: [
    posview({
      viewportWidth: 750,
      viewportUnit: 'vw',
      unitPrecision: 3,
      selectorBlackList: ['.ignore', '.hairlines', /^\.nop2r/, /^\.am/],
      minPixelValue: 1,
      mediaQuery: false,
    }),
    posretina({
      dpr: 2,
      radiusUnit: 'vw',
    }),
  ],
  hash: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        // antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: '测评',
        dll: true,
        // fastClick: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://192.168.6.24:80',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
