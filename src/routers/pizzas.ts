import express from 'express';

import {
  getPizzaById,
  getPizzasByCategoryId,
  getAllPizzas,
} from '../controllers/Pizzas';

const router = express.Router();

router.get('/', getAllPizzas);
router.get('/:id', getPizzaById);
router.get('/category/:id', getPizzasByCategoryId);

// router.post('/create', createPizza);
// router.patch('/:id', updatePizza);
// router.delete('/:id', deletePizza);

export default router;
