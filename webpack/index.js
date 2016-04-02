/* eslint new-cap: 0 */
import webpack from 'webpack';
import { Router } from 'express';

import config from './default';
import { PUBLIC_PATH } from '../config/paths';

const router = Router();
const compiler = webpack(config);


/* Webpack middlewate. */
router.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: PUBLIC_PATH,
}));

router.use(require('webpack-hot-middleware')(compiler));


/* Export app */
export default router;
