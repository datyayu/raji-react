/* eslint new-cap: 0 */
import { Router } from 'express';

import artistsJSON from './mock/artists';
import albumsJSON from './mock/albums';

const router = Router();


router.get('/artists', (req, res) => {
  res.json({ artists: artistsJSON });
});

router.get('/albums', (req, res) => {
  res.json({ albums: albumsJSON });
});


export default router;
