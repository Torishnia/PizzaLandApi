import express, { Request, Response } from 'express';

const  { getAllPizzas, getPizzaById } = require('./controllers/Product');

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Express worked');
});

router.get('/pizzas', getAllPizzas);
router.get('/pizzas/:id', getPizzaById);

export default router;