import express from 'express';

import pizza from './pizza';
import category from './category';
import order from './order';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('OK'));

router.use('/pizzas', pizza);
router.use('/categories', category);
router.use('/orders', order);

export default router;
