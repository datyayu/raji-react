import express from 'express';
import * as paths from '../config/paths';
import { __DEV__, HOST, PORT } from '../config/env';
import webpackMiddleware from '../webpack';

const app = express();

/* Middleware */
if (__DEV__) {
  app.use(webpackMiddleware);
}

/* Routes */
app.use('/assets', express.static(paths.ASSETS_DIR));
app.get('*', (req, res) => res.sendFile(paths.INDEX_FILE));


/* Start server */
app.listen(PORT, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
