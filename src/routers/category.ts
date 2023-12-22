import express from 'express';

import { getAllCategories, getAll } from '../controllers/Category';

const router = express.Router();

router.get('/', getAll);
// router.get('/', getAllCategories);

export default router;
