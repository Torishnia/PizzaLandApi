import express from 'express';

import pizzas from './pizzas';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('OK'));

router.use('/pizzas', pizzas);

export default router;
