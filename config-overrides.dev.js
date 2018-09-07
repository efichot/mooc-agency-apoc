const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = function(config) {

  // Add the loader second-to-last
  // (last one must remain as the "file-loader")
  let loaderList = config.module.rules[1].oneOf;

  loaderList.splice(loaderList.length - 2, 1, {
    test: /\.css$/,
    use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        grid: true,
        plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
          // '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
          ],
          flexbox: 'no-2009',
        }),
        ],
      },
    },
    ],
  })

  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.svg$/,
    loader: 'raw-loader'
  });

  // If not a spa, but a multiple html pages app, uncomment the following

/*  let pluginList = config.plugins;
  pluginList[1] = 
  new HtmlWebpackPlugin({
    inject: true,
    filename: 'index.html',
    template: path.resolve(__dirname, '.', 'public/index.html'),
  });
  pluginList.splice(1, 0, new HtmlWebpackPlugin({
      inject: true,
      filename: 'home.html',
      template: path.resolve(__dirname, '.', 'public/home.html'),
    }),);*/


}

