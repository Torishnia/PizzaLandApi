import express from 'express';

import { getAllPizzas, getPizzaById, createPizza, updatePizza, deletePizza } from '../controllers/Product';

const router = express.Router();

router.get('/pizzas', getAllPizzas);
router.get('/pizzas/:id', getPizzaById);
router.post('/pizzas/create', createPizza);
router.patch('/pizzas/:id', updatePizza);
router.delete('/pizzas/:id', deletePizza);

export default router;
