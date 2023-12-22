import express from 'express';

import {
  getPizzaById,
  getAllPizzas,
} from '../controllers/Pizza';

const router = express.Router();

router.get('/', getAllPizzas);
router.get('/:id', getPizzaById);

// router.post('/create', createPizza);
// router.patch('/:id', updatePizza);
// router.delete('/:id', deletePizza);

export default router;
