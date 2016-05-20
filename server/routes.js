/* eslint new-cap: 0 */
import { Router } from 'express';

import artistsJSON from './mock/artists';
import albumsJSON from './mock/albums';

const router = Router();


router.get('/albums', (req, res) => {
  res.json({ albums: albumsJSON });
});

router.get('/artists', (req, res) => {
  res.json({ artists: artistsJSON });
});

router.get('/albums/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    album: albumsJSON.filter(album => album.id === parseInt(id, 10))[0] || null,
  });
});


export default router;
