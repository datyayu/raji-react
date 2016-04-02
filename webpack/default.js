import webpack from 'webpack';
import requireDir from 'require-dir';
import * as env from '../config/env';
import * as paths from '../config/paths';

const lFolder = requireDir('./loaders');


const devtool = 'cheap-module-eval-source-map';

const resolve = {
  extensions: [
    '',
    '.js',
    '.jsx',
    '.css',
    '.scss',
    '.sass',
  ],
};

const entry = [
  'webpack-hot-middleware/client',
  paths.ENTRY_POINT,
];

const output = {
  path: paths.ASSETS_DIR,
  publicPath: paths.PUBLIC_PATH,
  filename: 'bundle.js',
};

const module = {
  loaders: Object.keys(lFolder).reduce((l, k) => l.concat(lFolder[k].default), []),
};

const eslint = {
  configFile: paths.ESLINT_FILE,
};

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin(env),
];


export default {
  devtool,
  resolve,
  entry,
  output,
  module,
  plugins,
  eslint,
};
