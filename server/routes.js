/* eslint new-cap: 0 */
import { Router } from 'express';
import artistsJSON from './mock/artists';


const router = Router();

router.get('/artists', (req, res) => {
  res.json({ artists: artistsJSON });
});


export default router;
