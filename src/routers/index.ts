import express from 'express';

import pizza from './pizza';
import category from './category';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('OKK'));

router.use('/pizzas', pizza);
router.use('/categories', category);

export default router;
