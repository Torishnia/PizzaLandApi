import express from 'express';

import pizzas from './pizzas';
import category from './category';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('OK'));

router.use('/pizzas', pizzas);
router.use('/categories', category);

export default router;
