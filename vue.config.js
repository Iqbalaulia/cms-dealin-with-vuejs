// const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      // new webpack.ProvidePlugin({
      //   introJs: ['intro.js'],
      // }),
    ],
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/base/_variables.scss";',
      },
    },
  },
};
