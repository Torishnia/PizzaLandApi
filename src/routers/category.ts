import express from 'express';

import { getAllCategories } from '../controllers/Category';

const router = express.Router();

router.get('/', getAll);
// router.get('/', getAllCategories);

export default router;
